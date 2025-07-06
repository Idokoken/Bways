const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String },
    cartdata: { type: Object, default: {} }

  }, { minimize: false },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
