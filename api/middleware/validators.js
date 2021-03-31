const Joi = require("joi");

const getPostByDate = {
  query: Joi.object({
    init_date: Joi.date().required(),
    end_date: Joi.date().required(),
    orderBy: Joi.string().valid("ups", "comments"),
  }),
};

const getPostUserOrderned = {
  query: Joi.object({
    orderBy: Joi.string().required().valid("ups", "comments"),
  }),
};


module.exports = {
  getPostByDate,
  getPostUserOrderned
};
