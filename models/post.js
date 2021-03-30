const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define("Post", {
    author_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    ups: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    comments: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });

  return Post;
};
