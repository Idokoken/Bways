const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const connectCloudinary = async () => {
  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

// const connectCloudinary = async () => {
//   await cloudinary.config({
//     cloud_name: "dmb6bzbfi",
//     api_key: "815663968748662",
//     api_secret: "pGyBEnjuQNe-u5jVUWN3ltz5nl8",
//   });
// };

module.exports = connectCloudinary;
