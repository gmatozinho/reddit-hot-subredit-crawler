const { NotImplemented } = require("http-errors");
var { post } = require("../loaders/sequelize");

const read = async (params) => {
  try {
    const result = await post.findAll(params);
    return result;
  } catch (error) {
    throw error;
  }
};

const insert = async (body) => {
  try {
    const result = await post.build(body).save();
    return result;
  } catch (error) {
    throw error;
  }
};

const update = () => {
  throw NotImplemented;
};

const remove = () => {
  throw NotImplemented;
};

module.exports = {
  read,
  insert,
  update,
  remove,
};
