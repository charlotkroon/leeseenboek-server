const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("../book/model");
// const ReadingListItem = require("../readinglistitem/model");
const User = require("../user/model");

const Review = db.define("review", {
  stars: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Review.belongsTo(User);
Review.belongsTo(Book);
User.hasMany(Review);
Book.hasMany(Review);

module.exports = Review;

//cmd D - select 1 word --> cmd D if you want to select others too -> change word
