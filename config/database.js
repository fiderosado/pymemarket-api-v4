/*
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'pyme'),
        user: env('DATABASE_USERNAME', 'ruben'),
        password: env('DATABASE_PASSWORD', 'postgres'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

 */
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'db/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});



