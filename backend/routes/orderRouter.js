const express = require("express");
const {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
} = require("../controller/orderController");
const { adminAuth } = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/place/stripe", authUser, placeOrderStripe);
orderRouter.post("/place/razorpay", authUser, placeOrderRazorpay);

// User Feature
orderRouter.post("/", authUser, userOrders);

module.exports = orderRouter;
