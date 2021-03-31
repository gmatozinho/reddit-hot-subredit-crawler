const express = require("express");
const router = express.Router();
const post = require("./routes/post");

// guaranteed to get dependencies
module.exports = () => {
  post(router);

  return router;
};
