
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }),
    knex.schema.createTable('videos', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('description', 1000);
      table.string('url');
      table.integer('channelId');
      table.integer('duration');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }),
    knex.schema.createTable('tagvideo', (table) => {
      table.increments('id').primary();
      table.integer('videoid').unsigned()
        .references('videos.id');
      table.integer('tagid').unsigned()
        .references('tags.id');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('videos'),
  knex.schema.dropTable('tags')
  knex.schema.dropTable('tagvideo')
};
