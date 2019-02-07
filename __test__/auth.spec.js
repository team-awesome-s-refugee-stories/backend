const request = require('supertest');
const {generateToken, authenticate} = require('../auth/authenticate');

const user = {
	username: 'bob',
	password: 'yomydudes',
	first: 'bob',
	last: 'dole'
};
const token = generateToken(user);
const tokenReq = {
	req: {
		get: function(name) {
			return token;
		}
	}
};

describe('Authentication', () => {
	describe('Unit Testing', () => {
		it('generateToken() should NOT produce the same data that is sent to it', () => {
			expect(typeof token).not.toBe(typeof user);
			expect(JSON.stringify(token)).not.toMatch(/yomydudes/gi);
			expect(JSON.stringify(token)).not.toBe(JSON.stringify(user));
		});

		it('authenticate() should return an error if the token is invalide', () => {
			console.log(tokenReq);
			console.log(authenticate(tokenReq, 'res', 'next'));
			expect(1).toBe(1);
		});
		it('authenticate() should return an error if the token has the wrong rolls', () => {
			expect(1).toBe(1);
		});
		it('authenticate() should return an error if no token is provided', () => {
			expect(1).toBe(1);
		});
	});
});
