var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'password',
    database : 'auroratube'
  }
});

knex.seed.make()