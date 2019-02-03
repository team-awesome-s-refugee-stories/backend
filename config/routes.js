const bcrypt = require('bcryptjs');
const db = require('../dbConfig');

const {authenticate, generateToken} = require('../auth/authenticate');

module.exports = server => {
	server.get('/', sanityCheck); //sanity Check
	server.post('/api/register', register); //register a new user
	server.post('/api/login', login); //login a user
	server.get('/api/allstories', authenticate, getAllStories); //get all possible stories
	server.get('/api/stories', getStories); //get only the stories that have been approved
};

function sanityCheck(req, res) {
	res.send('API running');
}

function register(req, res) {
	// implement user registration
	const userInfo = req.body;
	const hash = bcrypt.hashSync(userInfo.password, 12);
	userInfo.password = hash;

	db('users')
		.insert(userInfo)
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => res.status(500).json(err));
}

function login(req, res) {
	// implement user login
	const creds = req.body;

	db('users')
		.where({username: creds.username})
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.status(200).json({
					loggedInAs: `${user.username}`,
					token
				});
			} else {
				res.status(401).json({
					message: 'Incorrect username or password'
				});
			}
		})
		.catch(err => res.status(500).json(err));
}

function getAllStories(req, res) {
	db('stories')
		.then(stories => {
			res.status(201).json(stories);
		})
		.catch(err =>
			res.status(500).json({message: 'Database error', error: err})
		);
}

function getStories(req, res) {
	db('stories')
		.where({approved: 1})
		.then(stories => {
			res.status(201).json(stories);
		})
		.catch(err =>
			res.status(500).json({message: 'Database error', error: err})
		);
}
