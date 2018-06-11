
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    }),
    knex.schema.createTable('videos', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    }),
    knex.schema.createTable('tagVideo', (table) => {
      table.integer('videoId').unsigned()
        .references('videos.id');
      table.integer('tagId').unsigned()
        .references('tags.id');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    })
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('videos'),
  knex.schema.dropTable('tags')
};
