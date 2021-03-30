const { NotImplemented } = require("http-errors");
const { sequelize } = require("../loaders");

const post = sequelize.post;

const readAll = async () => {
  const result = await post.findAll();
  return result;
};

const insert = async (body) => {
  const result = await post.build(body).save();
  return result;
};

const update = () => {
  throw NotImplemented;
};

const remove = () => {
  throw NotImplemented;
};

module.exports = {
  readAll,
  insert,
  update,
  remove,
};
