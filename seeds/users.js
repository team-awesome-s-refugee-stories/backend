exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
					id: 1,
					username: 'admin',
					password:
						'$2a$12$/RIyLpjZCYkji4.Ps/hmZe6Mp3ZFLy/xR2KZqkzHGESHLaAF9LR4m',
					first: 'Admin',
					last: 'Astration',
					roll: 'admin'
				},
				{
					id: 2,
					username: 'jeff',
					password:
						'$2a$12$/RIyLpjZCYkji4.Ps/hmZe6Mp3ZFLy/xR2KZqkzHGESHLaAF9LR4m',
					first: 'Jeff',
					last: 'Jefferson',
					roll: 'user'
				}
			]);
		});
};
