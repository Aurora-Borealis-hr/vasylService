const connectionConfig = require('../config/dbConfig')

var knex = require('knex')({
  client: 'pg',
  connection: connectionConfig,
});


module.exports.knex = knex;