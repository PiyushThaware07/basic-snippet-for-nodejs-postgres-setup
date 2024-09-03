const sequelize = require("../db/db.connection");
const { Sequelize, DataTypes, Model } = require("sequelize");

const db = {}
db.sequelize = Sequelize;
db.sequelize = sequelize;

// Register Here
db.UserModel = require("./user.model")(sequelize, DataTypes, Model);


module.exports = db;