// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'sr0BZonRScOT5hL1E6yNCyg9YvX4bWpw'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'jobsrabbitdev.7d1ak.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'jobsRabbitDev'),
        username: env('DATABASE_USERNAME', 'jobsrabbit'),
        password: env('DATABASE_PASSWORD', 'Job@123!'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});