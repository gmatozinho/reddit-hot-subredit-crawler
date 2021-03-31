const config = require("./config");
const jobs = require("./jobs");

function startServer() {
  const { app } = require("./app");

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
