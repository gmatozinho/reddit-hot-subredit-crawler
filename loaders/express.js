const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const logger = require("morgan");
const { errorHandler } = require("../api/middleware");
const routes = require("../api");

module.exports = async (app) => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());

  app.use(routes());

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  app.use(errorHandler);
  app.enable("trust proxy");

  app.use(cors());
  return app;
};
