exports.up = function (knex) {
    return knex.schema
      .createTable('photoalbum', (table) => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('photo_name').notNullable().defaultTo('Photo');
        table.string('photo_longitude').notNullable().defaultTo('N/A');
        table.string('photo_latitude').notNullable().defaultTo('N/A');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('photoalbum');
  };
