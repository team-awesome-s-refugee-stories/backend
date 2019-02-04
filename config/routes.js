const bcrypt = require('bcryptjs');
const db = require('../dbConfig');

const {authenticate, generateToken} = require('../auth/authenticate');

module.exports = server => {
	server.get('/', sanityCheck); //sanity Check

	//users
	server.post('/api/register', register); //register a new user
	server.post('/api/login', login); //login a user

	//stories
	server.get('/api/allstories', authenticate, getAllStories); //get all possible stories
	server.get('/api/allstories/:id', authenticate, getAllStoriesById); //From all possible stories, get one
	server.get('/api/stories', getStories); //get only the stories that have been approved
	server.get('/api/stories/:id', getStoriesById); //From approved stories, get one
	server.post('/api/submit', submit); //POST a new story
	server.delete('/api/deletestory/:id', authenticate, deleteStory); //DELETE remove a story, protected
	server.put('/api/update/:id', authenticate, updateStory); //PUT edit a story, protected
};

// Sanit check
function sanityCheck(req, res) {
	res.send('API running');
}

// User registration
function register(req, res) {
	const userInfo = req.body;
	const hash = bcrypt.hashSync(userInfo.password, 12);
	userInfo.password = hash;
	userInfo.roll = 'user';

	db('users')
		.insert(userInfo)
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => res.status(500).json(err));
}

// Uer login
function login(req, res) {
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

// Protected route to get all stories
function getAllStories(req, res) {
	db('stories')
		.then(stories => {
			res.status(201).json(stories);
		})
		.catch(err =>
			res.status(500).json({message: 'Database error', error: err})
		);
}

// Protected route to get a story behind a protected route
function getAllStoriesById(req, res) {
	const id = req.params.id;

	db('stories')
		.where({id: id})
		.first()
		.then(stories => {
			res.status(201).json(stories);
		})
		.catch(err =>
			res.status(500).json({message: 'Database error', error: err})
		);
}

// Public route to get approved stories
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

// Public route to get an approved story by an ID
function getStoriesById(req, res) {
	const id = req.params.id;

	db('stories')
		.where({approved: 1, id: id})
		.first()
		.then(story => {
			res.status(201).json(story);
		})
		.catch(err =>
			res.status(500).json({message: 'Database error', error: err})
		);
}

// Add a new story
function submit(req, res) {
	let story = req.body;
	story.approved = 0;
	story.snippet = '';

	db('stories')
		.insert(story)
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => res.status(500).json(err));
}

// Delete a story
function deleteStory(req, res) {
	const id = req.params.id;

	db('stories')
		.where({id: id})
		.delete()
		.then(thing => {
			res.status(200).json(thing);
		})
		.catch(err => res.status(500).json(err));
}

// Update a story
function updateStory(req, res) {
	const id = req.params.id;
	userId = req.decoded.id;
	req.body.approved_by_user_id = userId;

	db('stories')
		.where({id: id})
		.update(req.body)
		.then(thing => {
			res.status(200).json(thing);
		})
		.catch(err => res.status(500).json(err));
}
