import config from './src/config/index';
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: config.get('liredditDb.host'),
      port: config.get('liredditDb.port'),
      user: config.get('liredditDb.user'),
      password: config.get('liredditDb.password'),
      database: config.get('liredditDb.database'),
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: config.get('liredditDb.host'),
      port: config.get('liredditDb.port'),
      user: config.get('liredditDb.user'),
      password: config.get('liredditDb.password'),
      database: config.get('liredditDb.database'),
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'localhost',
    connection: {
      host: config.get('liredditDb.host'),
      port: config.get('liredditDb.port'),
      user: config.get('liredditDb.user'),
      password: config.get('liredditDb.password'),
      database: config.get('liredditDb.database'),
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
