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


// mongodb+srv://
// jobsrabbit
// :
// Job%40123!
// @
// jobsrabbitdev.7d1ak.mongodb.net
// /
// myFirstDatabase
// ?retryWrites=true&w=majority