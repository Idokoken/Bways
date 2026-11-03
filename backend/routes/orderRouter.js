const express = require("express");
const {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
  verifyStripe,
  verifyRazorpay,
} = require("../controller/orderController");
const { adminAuth } = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// VerifyPayment
orderRouter.post("/verifystripe", authUser, verifyStripe);
orderRouter.post("/verifyrazorpay", authUser, verifyRazorpay);

// User Feature
orderRouter.post("/userorders", authUser, userOrders);

module.exports = orderRouter;
