const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  stars: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
});
