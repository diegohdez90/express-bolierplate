export default {
  env: 'development',
  jwtSecret: 'YVWhIUkB~rFR&]J',
  port: 8081,
  database: {
    client: 'mongodb',
    connection: {
      host: 'localhost',
      port:27017,
      user: '',
      password: '',
      database: 'RCI-Localhost',
      charset: 'utf8',
    },
  },
};
