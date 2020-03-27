const { Router } = require("express");
const auth = require("../auth/middleware");
const Book = require("../book/model");

const router = new Router();

//get all books
router.get("/books", async (req, res, next) => {
  try {
    const allBooks = await Book.findAll();
    res.send(allBooks);
  } catch (error) {
    next(error);
  }
});

// create a new book
router.post("/books", auth, async (req, res, next) => {
  console.log("Is the req.user working?", req.user);
  const book = {
    title: req.body.title,
    author: req.body.author,
    logo: req.body.logo,
    yearOfPublication: req.body.yearOfPublication,
    publisher: req.body.publisher
  };
  const newBook = await Book.create(book);
  req.user.addBook(newBook, { through: { haveRead: false } });
  res.send(newBook);
});

module.exports = router;

//NOTES FROM SESSION WITH DAVID
//1. Only use the API on the front end
//- Search bar --> inside you call the goodreads API & display results
//- When clicking on --> I am reading this book --> you send a post req to Express API.
// this needs to say what the books tile, author etc. You get that data from goodreads api.
// Take data and put in the body.

//You just need to use 'include'.
