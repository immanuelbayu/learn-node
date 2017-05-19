const mysqlConfig = require('./config/mysql.json');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  development: {
    database: mysqlConfig[environment].database,
    host: mysqlConfig[environment].host,
    username: mysqlConfig[environment].username,
    password: mysqlConfig[environment].password,
    dialect: 'mysql',
  },
  test: {
    database: mysqlConfig[environment].database,
    host: mysqlConfig[environment].host,
    username: mysqlConfig[environment].username,
    password: mysqlConfig[environment].password,
    dialect: 'mysql',
  },
  production: {
    database: mysqlConfig[environment].database,
    host: mysqlConfig[environment].host,
    username: mysqlConfig[environment].username,
    password: mysqlConfig[environment].password,
    dialect: 'mysql',
  },
};
