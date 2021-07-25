const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/Users");

router.post("/routes/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/routes/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
});

router.post("/routes/logout", (req, res) => {
  console.log(req.body);
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
