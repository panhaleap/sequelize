import Sequelize from 'sequelize';

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_LOGGING, DB_PASSWORD, DB_DIALECT } = process.env;

export const sequelize = new Sequelize({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  username: DB_USERNAME,
  logging: DB_LOGGING,
  password: DB_PASSWORD,
  dialect: DB_DIALECT
});
