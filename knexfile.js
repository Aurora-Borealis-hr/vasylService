// Update with your config settings.

const dbConfig = require('./config/dbConfig');

module.exports = {
  development: {
    client: 'pg',
    connection: dbConfig,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {}
};
