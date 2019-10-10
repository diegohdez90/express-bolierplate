export default {
  env: 'production',
  jwtSecret: 'i$cD&iTAq:o]p<;',
  port: 8081,
  database: {
    client: 'mongodb',
    connection: {
      host: 'localhost',
      port:27017,
      user: '',
      password: '',
      database: 'RCI',
      charset: 'utf8',
    },
  },
};
  