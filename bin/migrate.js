// bin/migrate.js

var { sequelize } = require("../loaders");
sequelize.db.sync();
