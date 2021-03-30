const cron = require("node-cron");
const axios = require("axios");
const { to } = require("await-to-js");

const reddit_artificial_puller = cron.schedule("* * * * *", async () => {
  const [err, response] = await to(
    axios.get("https://api.reddit.com/r/artificial/hot")
  );

  if (err) throw err;

  console.log("Executando a tarefa a cada 1 minuto");
});

reddit_artificial_puller.start();
