const Sequelize = require("sequelize");
const db = require("../db");

const ReadingListItem = db.define("readinglistitem", {
  haveRead: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = ReadingListItem;

//THIS IS A JOINED TABLE
