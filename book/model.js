const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Book = db.define(
  "book",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    logo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    yearOfPublication: {
      type: Sequelize.DATE,
      allowNull: true
    },
    publisher: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "books"
  }
);

Book.belongsTo(User);
User.hasMany(Book);

module.exports = Book;
//user hasmany book

//readinglistitem belongs to book
//book belongs to readinglistitem
//

//recipe ingredients is hetzeldfe als mijn readinglistitem

//1 book has many users
//1 user has many books
