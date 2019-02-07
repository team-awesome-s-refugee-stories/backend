const db = require('../dbConfig');
//const request = require('supertest');
const migrations = require('../migrations/migrations_testing');

// afterEach(async () => {
// 	await db('stories').truncate();
// });

describe('db', () => {
	describe('Unit Testing', () => {
		it('migrations should have a matching undo ( .down() ) function', async () => {
			let err;
			migrations.forEach(migration => {
				err = null;
				try {
					migration.down();
					if (migration.down() === undefined)
						err = 'down function undefined';
				} catch (error) {}
				expect(err).toBe(null);
			});
		});
	});
});
