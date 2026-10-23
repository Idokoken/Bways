const express = require("express");
const {
  addToCart,
  updateCart,
  getUserCart,
  removeCartItem,
  clearCart,
} = require("../controller/cartController");
const authUser = require("../middleware/auth");

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);
cartRouter.post("/get", authUser, getUserCart);
cartRouter.delete("/item/:id", authUser, removeCartItem);
cartRouter.delete("/:id", authUser, clearCart);

module.exports = cartRouter;
