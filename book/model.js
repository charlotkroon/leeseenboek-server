const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define(
  "book",
  {
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    author: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    logo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    yearOfPublication: {
      type: Sequelize.DATE,
      allowNull: false
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

module.exports = Book;
//user hasmany book

//readinglistitem belongs to book
//book belongs to readinglistitem
//

//recipe ingredients is hetzeldfe als mijn readinglistitem

//1 book has many users
//1 user has many books
