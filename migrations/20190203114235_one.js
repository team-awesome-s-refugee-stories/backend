exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', tbl => {
			//primary key: id
			tbl.increments();

			//other columns:
			tbl.text('username', 255).notNullable();
			tbl.text('password', 255).notNullable();
			tbl.text('first', 255);
			tbl.text('last', 255);

			//timestamps: created, edited
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('username', 'uq_username');
		})
		.createTable('stories', tbl => {
			//primary key: id
			tbl.increments();

			//other columns
			tbl.text('author', 128);
			tbl.text('title', 128).notNullable();
			tbl.text('snippet', 255);
			tbl.boolean('approved');
			tbl.text('body').notNullable();

			//forign keys:
			tbl.integer('approved_by_user_id')
				.unsigned()
				.references('id')
				.inTable('users');

			//timestamps: created, edited
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('title', 'uq_title');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('stories');
};
