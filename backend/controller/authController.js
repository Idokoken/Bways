const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator")

require("dotenv").config();


const createToken  = (id) => {
return jwt.sign({id}, process.env.JWT_SECRET)
}

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const check = await User.findOne({ email });
        if (check) {
            res.status(400).json({ success: false, message: "email already in use" });
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({ success: false, msg: "invalid Email" })
        }
        if (password.length < 8) {
            res.status(400).json({ success: false, msg: "password must be at least 8 Characters" })
        }
        {
            let salt = bcrypt.genSaltSync(10);
            let hashedPassword = bcrypt.hashSync(password, salt);
            const user = await new User({ username, email, password: hashedPassword });
            const newUser = await user.save();

            const token = await jwt.sign(
                {
                    id: newUser._id,
                    // email: newUser.email
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN, }
            );
            // res.status(200).json({ success: true, msg: newUser });
            res.status(200).json({ success: true, token });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, massage: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, msg: "invalid cridentials" });
        }

        const userPassword = await bcrypt.compare(password, user.password);
        if (!userPassword) {
            res.status(400).json({ success: false, msg: "invalid cridentials" });
        }
        const token = await jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

       
        // res.cookie("token", token).json(user);
        //res.send("cookie sent");
        // res.status(200).json({ success: true, user, token });
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message });
    }
};


// Routes for admin login
exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.status(200).json({ success: true, token });
        } else {
            res.status(400).json({ success: false, msg: "invalid cridentials" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message });
    }
}
