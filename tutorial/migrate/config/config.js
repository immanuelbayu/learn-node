const mysqlCfg = require('../../../config/mysql.json');

const environment = process.env.NODE_ENV || 'development';


module.exports = {
  development: {
    database: mysqlCfg[environment].database,
    host: mysqlCfg[environment].host,
    username: mysqlCfg[environment].username,
    password: mysqlCfg[environment].password,
    dialect: 'mysql',
  },
  test: {
    database: mysqlCfg[environment].database,
    host: mysqlCfg[environment].host,
    username: mysqlCfg[environment].username,
    password: mysqlCfg[environment].password,
    dialect: 'mysql',
  },
  production: {
    database: mysqlCfg[environment].database,
    host: mysqlCfg[environment].host,
    username: mysqlCfg[environment].username,
    password: mysqlCfg[environment].password,
    dialect: 'mysql',
  },
};
