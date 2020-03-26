const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const Book = require("../book/model");

const ReadingListItem = db.define("readinglistitem", {
  haveRead: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = ReadingListItem;

ReadingListItem.belongsTo(User);
ReadingListItem.belongsTo(Book);
User.hasMany(ReadingListItem);
Book.hasMany(ReadingListItem);

//THIS IS A JOINED TABLE
