const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        sizes: { type: Array, required: true },
        price: { type: Number, required: true },
        countInSock: { type: Number },
        numReviews: { type: Number },
        image: { type: Array, required: true },
        brand: { type: String },
        rating: { type: String },
        bestseller: { type: Boolean },
        date: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);