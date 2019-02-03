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
					password: 'admin',
					first: 'Admin',
					last: 'Astration'
				},
				{
					id: 2,
					username: 'jeff',
					password: 'password',
					first: 'Jeff',
					last: 'Jefferson'
				}
			]);
		});
};
