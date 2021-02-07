// clientRouter.js
// ==============================

// imports
const express = require("express");
const clientRouter = express.Router();
const Client = require("../models/client.js");

// Post
clientRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newClient = new Client(req.body);
  newClient.save((err, savedClient) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedClient);
  });
});

// exports
module.exports = clientRouter;
