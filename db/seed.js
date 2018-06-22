var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'auroratube.cfkobq2rur3i.us-east-1.rds.amazonaws.com',
    user : 'root',
    password : 'password',
    database : 'auroratube'
  }
});

knex.seed.make()
