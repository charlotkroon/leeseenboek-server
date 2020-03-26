const { Router } = require("express");
const Review = require("./model");
const auth = require("../auth/middleware");
const B

const router = new Router();

router.get("/books/:bookId/reviews", async (req, res, next) => {
  const { bookId } = req.params;
  const allReviews = await Review.findAll({ where: { bookId } });
  res.send(allReviews);
});

router.post("/books/:bookId/review", auth, async (req, res, next) => {
  console.log("reqqq?", req.user);
  const { bookId } = req.params;
  const review = {
    stars: req.body.stars,
    description: req.body.description
  };
  const newReview = await Review.create(review);
  res.send(newReview);
});

module.exports = router;
