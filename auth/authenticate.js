const jwt = require('jsonwebtoken');

const jwtKey =
	process.env.JWT_SECRET ||
	'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports
module.exports = {
	authenticate,
	generateToken
};

// implementation details
function authenticate(req, res, next) {
	const token = req.get('Authorization');

	if (token) {
		jwt.verify(token, jwtKey, (err, decoded) => {
			if (err) return res.status(401).json(err);

			req.decoded = decoded;

			next();
		});
	} else {
		return res.status(401).json({
			error: 'No token provided, must be sent on the Authorization Header'
		});
	}
}

//generateToken
function generateToken(user) {
	const payload = {
		username: user.username,
		roles: ['sales', 'admin']
	};
	const secret = jwtKey; //i do not understand how this line works
	const options = {expiresIn: '30m'};

	return jwt.sign(payload, secret, options);
}
