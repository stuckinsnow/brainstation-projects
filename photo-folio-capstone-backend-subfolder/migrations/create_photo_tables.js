exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('photoalbum', (table) => {
      table.increments('id').primary();
      table.string('image');
      table.string('filename').notNullable().defaultTo('');
      table.string('photo_name').notNullable().defaultTo('');
      table.string('photo_region').notNullable().defaultTo(''); 
      table.json('exif_data').nullable().defaultTo(null);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('contact', (table) => {
      table.increments('id').primary();
      table.string('email').notNullable().defaultTo('');
      table.string('subject').notNullable().defaultTo('');
      table.text('content').notNullable().defaultTo('');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('photoalbum'),
    knex.schema.dropTable('contact')
  ]);
};
