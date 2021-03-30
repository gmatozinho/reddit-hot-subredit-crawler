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
    response.data.data.children.map(async (child) => {
      const body = {
        title: child.data.title,
        author_name: child.data.author,
        create_date: child.data.created_utc,
        ups: child.data.ups,
        comments: child.data.num_comments,
      };

      const [err, response] = await to(post.insert(body));
      if (err) throw err;
      return response;
    })
  );

});

reddit_artificial_puller.start();
