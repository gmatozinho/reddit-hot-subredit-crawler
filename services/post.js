const { post } = require("../controllers");
const { Op } = require("sequelize");

const getByDate = async (params) => {
  try {
    const query = {
      where: {
        create_date: {
          [Op.gte]: new Date(params.init_date),
          [Op.lte]: new Date(params.end_date),
        },
      },
    };

    orderBy(params, query);

    const response = await post.read(query);

    return response;
  } catch (error) {
    throw error;
  }
};

const getUser = async (params) => {
  try {
    const query = {
      attributes: ["author_name", "ups", "comments"],
    };

    orderBy(params, query);

    const response = await post.read(query);

    return response;
  } catch (error) {
    throw error;
  }
};

const orderBy = (params, query) => {
  switch (params.orderBy) {
    case "ups":
      query.order = [["ups", "DESC"]];
      break;
    case "comments":
      query.order = [["comments", "DESC"]];
      break;
    default:
      break;
  }
};

module.exports = {
  getByDate,
  getUser,
};
