const expressLoader = require("./express");
const sequelize = require("./sequelize");

const express = async (expressApp) => {
  await expressLoader({ app: expressApp });
  console.log("Express Initialized");
};

module.exports = {
  express,
  sequelize,
};
