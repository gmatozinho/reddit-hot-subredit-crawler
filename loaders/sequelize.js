const Sequelize = require("sequelize");
const config = require("../config");
const model = require("../models");

const sequelize = new Sequelize(
  config.DB_SCHEMA,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: global.TESTS ? "localhost" : config.DB_HOST,
    port: config.DB_PORT,
    dialect: "postgres",
  }
);

if (!global.TESTS) {
  sequelize.sync();
}
module.exports = {
  db: sequelize,
  post: model.post(sequelize),
};
