const { Router } = require("express");
const Review = require("./model");
const auth = require("../auth/middleware");
const router = new Router();

//GETS ALL REVIEWS
router.get("/books/:bookId/reviews", async (req, res, next) => {
  const { bookId } = req.params;
  const allReviews = await Review.findAll({ where: { bookId } });
  res.send(allReviews);
});

//POSTS ONE REVIEW BY USER ID
router.post("/books/:bookId/reviews", auth, async (req, res, next) => {
  console.log("reqqq?", req.user);
  const { bookId } = req.params;
  const review = {
    stars: req.body.stars,
    description: req.body.description,
    userId: req.user.id,
    bookId
  };
  const newReview = await Review.create(review);
  res.send(newReview);
});

module.exports = router;
