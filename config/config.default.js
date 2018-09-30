'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'qiufengnuhao',
      insecureAuth: true,
    },
    app: true,
    agent: false,
  };
  config.sequelize = {
    dialect: 'mysql', // 数据库类型（MySQL、SQLite、PostgreSQL、MSSQL）
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'qiufengnuhao',
  };
  config.keys = appInfo.name + new Date();
  return config;
};
