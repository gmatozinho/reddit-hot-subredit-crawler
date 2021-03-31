var express = require("express");
var router = express.Router();
const { validators } = require("../middleware");
const { post: postService } = require("../../services");
const to = require("await-to-js").default;
const { validate } = require("express-validation");

router.get(
  "/byDate",
  validate(validators.getPostByDate),
  async (req, res, next) => {
    const [error, response] = await to(postService.getByDate(req.query));
    if (error) next(error);
    else res.status(200).json(response);
  }
);

router.get(
  "/user",
  validate(validators.getPostUserOrderned),
  async (req, res, next) => {
    const [error, response] = await to(postService.getUser(req.query));
    if (error) next(error);
    else res.status(200).json(response);
  }
);

module.exports = (app) => {
  app.use("/post", router);
};
