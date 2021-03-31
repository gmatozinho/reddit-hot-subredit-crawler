const expressLoader = require("./express");
const sequelize = require("./sequelize");

const express = async (app) => {
  await expressLoader(app);
  console.log("Express Initialized");
};

module.exports = {
  express,
  sequelize
};
