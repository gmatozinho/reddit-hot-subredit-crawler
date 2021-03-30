const { NotImplemented } = require("http-errors");
const { sequelize } = require("../loaders");

const post = sequelize.post;

const readAll = async () => {
  try {
    const result = await post.findAll();
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
  readAll,
  insert,
  update,
  remove,
};
