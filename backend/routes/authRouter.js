const express = require("express")
const { registerUser, loginUser, adminLogin } = require("../controller/authController");

const authRoute = express.Router();

authRoute.post("/register", registerUser);
authRoute.post("/login", loginUser);
authRoute.post("/admin", adminLogin);


module.exports = authRoute;
