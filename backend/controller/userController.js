const express = require("express")
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("../models/userModel")

exports.createUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            res.json("email already in use");
        }
        if (password !== confirmPassword) {
            res.json("password don't match");
        }
        else {
            let salt = bcrypt.genSaltSync(10);
            let hashedPassword = bcrypt.hashSync(password, salt);
            const user = await new User({ username, email, password: hashedPassword });
            const newUser = await user.save();
            res.status(200).json(newUser);
        }
    } catch (error) {
        console.log(error);
    }
}
exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        const checkEmail = await User.findOne({ email });
        // if (checkEmail) {
        //     res.json("email already in use");
        // }
        // if (password || confirmPassword && (password != confirmPassword)) {
        //     res.status(400).json("password don't match");
        // }

        let salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(password, salt);
        const user = await User.findByIdAndUpdate(req.params.id,
            { username, email, password: hashedPassword });
        const newUser = await user.save();
        res.status(200).json(newUser);

    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user successfully deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

