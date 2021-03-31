const loaders = require("./loaders");

const express = require("express");

function initApp() {
  const app = express();

  loaders.express(app);

  return app;
}

module.exports = {
  app: initApp(),
};
