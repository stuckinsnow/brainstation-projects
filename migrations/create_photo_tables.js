exports.up = function(knex) {
  return knex.schema.createTable('photoalbum', (table) => {
    table.increments('id').primary();
    table.string('image');
    table.string('filename').notNullable().defaultTo('');
    table.string('photo_name').notNullable().defaultTo('');
    table.string('photo_region').notNullable().defaultTo(''); 
    table.json('exif_data').nullable().defaultTo(null);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('photoalbum');
};
