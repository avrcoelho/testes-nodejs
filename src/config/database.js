require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  operatorAliases: false,
  storage: './__tests__/database.sqlite',
  loggin: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
