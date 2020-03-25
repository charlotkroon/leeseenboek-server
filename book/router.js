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

//create a new book
router.post("/book", auth, async (req, res, next) => {
  console.log("Is the req.user working?", req.user);
  try {
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
  }
});

module.exports = router;
