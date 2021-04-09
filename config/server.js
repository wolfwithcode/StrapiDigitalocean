module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://jobsrabbitstrapidev.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '97914b140be7dfd3758fc717aea970dd'),
    },
  },
});
