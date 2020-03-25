const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("../book/model");
const ReadingListItem = require("../readinglistitem/model");

const User = db.define(
  "user",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "users"
  }
);

User.belongsToMany(Book, { through: ReadingListItem });
Book.belongsToMany(User, { through: ReadingListItem });

module.exports = User;
