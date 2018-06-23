const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize('auroratube', 'postgres', 'password', config);

module.exports.sequelize = sequelize;


var knex = require('knex')({
  client: 'pg',
  connection: {
    // host : 'auroratube.cfkobq2rur3i.us-east-1.rds.amazonaws.com',
    host : 'localhost',
    database: 'auroratube',
    // user:     'root',
    user: 'postgres',
    password: 'password'
  }
});


module.exports.knex = knex;