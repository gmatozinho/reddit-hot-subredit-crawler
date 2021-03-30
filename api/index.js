const express = require("express");
const router = express.Router();
const post = require("./routes/post");
const user = require("./routes/user");

// guaranteed to get dependencies
module.exports = () => {
  post(router);
  user(router);

  return router;
};
