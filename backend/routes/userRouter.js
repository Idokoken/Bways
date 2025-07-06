const express = require("express")
const { createUser, getOneUser, getAllUsers, updateUser, deleteUser } = require("../controller/userController")


const userRoute = express.Router()

userRoute.post("/", createUser);
userRoute.get("/:id", getOneUser)
userRoute.get("/", getAllUsers)
userRoute.put("/:id", updateUser)
userRoute.delete("/:id", deleteUser)

module.exports = userRoute