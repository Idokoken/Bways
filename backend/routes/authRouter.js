const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

const authRouter = express.Router();

//register user
authRouter.post(async (req, res) => {
  try {
    res.status(200).json("hello");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = authRouter;
