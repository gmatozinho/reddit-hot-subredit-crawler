var express = require("express");
var route = express.Router();
const middleware = require("../middleware");
//const { post: postService } = require("../../services");
const to = require("await-to-js").default;

module.exports = (app) => {
  app.use("/user", route);

  route.get("/", async (req, res, next) => {
    res.status(200).json({ message: "Not implemented" });
    /* const [error, response] = await to(postService.read(req.query));
    if (error) next(error);
    else res.status(200).json(response); */
  });
};
