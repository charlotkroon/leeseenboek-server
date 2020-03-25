const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const bcrypt = require("bcrypt");
const User = require("../user/model");
const auth = require("./middleware");

const router = new Router();

function login(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    res.status(400).send({
      message: "Please supply a valid user email and password."
    });
  } else {
    User.findOne({
      where: { email: req.body.username }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "Sorry, user with that username does not exist"
          });
        } else if (bcrypt.compareSync(req.body.password, entity.password)) {
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "Something went wrong"
        });
      });
  }
}

router.post("/login", login);

router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.username}.`
  });
});
module.exports = router;
