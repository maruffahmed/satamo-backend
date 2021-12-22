module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4954c863c1e90368910df8feda119545'),
  },
});
