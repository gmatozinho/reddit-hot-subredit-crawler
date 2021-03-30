const expressLoader = require("./express");
const sequelize = require("./sequelize");

module.exports = async ({ expressApp }) => {
  /* const mongoConnection = await sequelize();
  console.log('MongoDB Initialized'); */
  await expressLoader({ app: expressApp });
  console.log("Express Initialized");
};
