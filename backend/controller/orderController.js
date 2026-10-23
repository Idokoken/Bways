const Order = require("../models/orderModel");
const User = require("../models/userModel");

// Plcae Order using COD
exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Plcae Order using Stripe Method
exports.placeOrderStripe = async (req, res) => {};

// Plcae Order using RazorPay method
exports.placeOrderRazorpay = async (req, res) => {};

// All Orders for Admin panel
exports.allOrders = async (req, res) => {};

// All User's Order for Frontend
exports.userOrders = async (req, res) => {};

// Update Order Status from Admin Panel
exports.updateOrderStatus = async (req, res) => {};
