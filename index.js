const loaders = require("./loaders");
const config = require("./config");
const jobs = require("./jobs");

const express = require("express");

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
  `);
  });
}

startServer();
