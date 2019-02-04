exports.up = function(knex, Promise) {
	return knex.schema.table('users', tbl => {
		//add column
		tbl.text('roll', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', tbl => {
		tbl.dropColumn('roll');
	});
};
