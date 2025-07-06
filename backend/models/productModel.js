const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        category: { type: String },
        sizes: { type: Array },
        rating: { type: String },
        price: { type: Number },
        brand: { type: String },
        countInSock: { type: Number },
        numReviews: { type: Number },
        image: { type: Array },
        bestseller: { type: Boolean },
        date: { type: Number }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);