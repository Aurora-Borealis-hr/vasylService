// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'auroratube.cfkobq2rur3i.us-east-1.rds.amazonaws.com',
      database: 'auroratube',
      user:     'root',
      password: 'password'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};


// module.exports = {
//   development: {
//     client: 'mysql',
//     connection: {
//       database: 'auroratube',
//       user:     'root',
//       password: 'password'
//     },
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds/dev'
//     },
//     useNullAsDefault: true
//   },
// }