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
			if (err)
				return res.status(401).json({
					message: 'Invalide token, please log in and try again',
					error: err
				});

			if (decoded.roll !== 'admin')
				return res.status(401).json({
					message:
						'Not authorized to take this action, admin access needed, talk to your admin'
				});
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
	console.log(user);
	const payload = {
		username: user.username,
		roll: user.roll,
		id: user.id
	};
	const secret = jwtKey; //i do not understand how this line works
	const options = {expiresIn: '30m'};

	return jwt.sign(payload, secret, options);
}
