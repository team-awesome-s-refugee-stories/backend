exports.up = function(knex, Promise) {
	return knex.schema.table('stories', tbl => {
		//add columns
		tbl.text('url_picture');
		tbl.text('url_thumbnail');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('stories', tbl => {
		tbl.dropColumn('url_picture');
		tbl.dropColumn('url_thumbnail');
	});
};
