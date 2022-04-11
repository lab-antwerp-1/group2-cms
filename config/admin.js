module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59d8c405ecdb62e8ec74fd40cafe102d'),
  },
});
