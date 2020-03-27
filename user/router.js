const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");
const router = express.Router();

//ADDS ONE NEW USER
async function addUser(req, res, next) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
    const addUser = await User.create({ username, email, password });
    res.send(addUser);
  } catch (error) {
    next(error);
  }
}

//GETS ALL USERS
async function getUsers(req, rest, next) {
  try {
    const fetchUser = await User.findAll();
    res.json(fetchUser);
  } catch (error) {
    next(error);
  }
}

router.post("/users", addUser);
router.get("/users", getUsers);

module.exports = router;
