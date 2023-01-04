/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const Sequelize = require('sequelize');

const {
  T_DB_USER,
  T_DB_PASS,
  T_DB_HOST,
  T_DB_DEV_DB_NAME,
  T_DB_TEST_DB_NAME,
  T_DB_PROD_DB_NAME,
  NODE_ENV,
} = process.env;

const databaseCredentials = {
  development: {
    username: T_DB_USER,
    password: T_DB_PASS,
    database: T_DB_DEV_DB_NAME,
    host: T_DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: T_DB_USER,
    password: T_DB_PASS,
    database: T_DB_TEST_DB_NAME,
    host: T_DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: T_DB_USER,
    password: T_DB_PASS,
    database: T_DB_PROD_DB_NAME,
    host: T_DB_HOST,
    dialect: 'mysql',
  },
};

const { username, password, database, host, dialect } =
  databaseCredentials[NODE_ENV];

module.exports = databaseCredentials;

module.exports.connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 3306,
  dialectOptions: {
    multipleStatements: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});
