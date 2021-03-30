var express = require("express");
var router = express.Router();
const middleware = require("../middleware");
const { post: postService } = require("../../services");
const to = require("await-to-js").default;

module.exports = (app) => {
  app.use("/post", router);

  router.get("/", async (req, res, next) => {
    const [error, response] = await to(postService.read(req.query));
    if (error) next(error);
    else res.status(200).json(response);
  });
};
