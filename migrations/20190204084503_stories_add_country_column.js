exports.up = function(knex, Promise) {
	return knex.schema.table('stories', tbl => {
		//add column
		tbl.text('country', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('stories', tbl => {
		tbl.dropColumn('country');
	});
};
