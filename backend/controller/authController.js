const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

require("dotenv").config();

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const check = await User.findOne({ email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, message: "email already in use" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, massage: "invalid Email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "password must be at least 8 Characters",
      });
    }
    {
      let salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(password, salt);
      const user = await new User({
        username,
        email,
        password: hashedPassword,
      });
      const newUser = await user.save();

      const token = await jwt.sign(
        {
          id: newUser._id,
          // email: newUser.email
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN },
      );
      // res.status(200).json({ success: true, msg: newUser });
      return res
        .status(200)
        .json({ success: true, token, message: "registration successful" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, massage: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "invalid cridentials" });
    }

    const userPassword = await bcrypt.compare(password, user.password);
    if (!userPassword) {
      return res
        .status(400)
        .json({ success: false, message: "invalid cridentials" });
    }
    const token = await jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    // res.cookie("token", token).json(user);
    //res.send("cookie sent");
    // res.status(200).json({ success: true, user, token });
    return res
      .status(200)
      .json({ success: true, token, message: "login successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ massage: error.message });
  }
};

// Routes for admin login
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res
        .status(200)
        .json({ success: true, token, message: "Login Successful" });
    } else {
      res.status(400).json({ success: false, message: "Invalid Cridentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
