const cron = require("node-cron");
const axios = require("axios");
const { to } = require("await-to-js");
const config = require("../config");
const { post } = require("../controllers");

const reddit_artificial_puller = cron.schedule("* * * * *", async () => {
  console.log("Execute task every minute");
  const [err, response] = await to(axios.get(config.reddit_url));

  if (err) throw err;

  const result = await Promise.allSettled(
    response.data.children.map(async (child) => {
      const body = {};

      const result = await post.insert(body);
    })
  );
});

reddit_artificial_puller.start();
