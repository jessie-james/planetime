const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Signup
authRouter.post("/signup", (req, res, next) => {
  // check to see if username is already taken
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(400);
      return next(new Error("That username is already taken."));
    }
  });
  // save a new user
  const newUser = new User(req.body);
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    // create the token
    const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
    // send the response
    return res.status(201).send({ user: savedUser.withoutPassword(), token });
  });
});

// Login
authRouter.post("/login", (req, res, next) => {
  // Does user exist
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      res.status(400);
      return next(new Error("Username OR password are incorrect"));
    }
    //Does their password match
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(400);
        return next(err);
      }
      if (!isMatch) {
        res.status(400);
        return next(new Error("Username or password are incorrect"));
      }
      // create a token
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      // send the response
      return res.status(200).send({ user: user.withoutPassword(), token });
    });
  });
});

module.exports = authRouter;
