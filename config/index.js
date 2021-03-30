const env = require("dotenv").config();

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (env.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  reddit_url: "https://api.reddit.com/r/artificial/hot",
  DB_SCHEMA: process.env.DB_SCHEMA,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USER: process.env.DB_USER,
  DB_PORT: process.env.DB_PORT,
  DB_SSL: process.env.DB_SSL,
};
