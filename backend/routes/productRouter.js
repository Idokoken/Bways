const express = require("express");
const { createProduct, getOneProduct, getAllProducts, updateProduct,
  deleteProduct } = require("../controller/productController")
// const uploads = require("../middleware/uploadsCloudinary")
const uploads = require("../middleware/multer")

const productRoute = express.Router()

productRoute.post("/", uploads.fields([{ name: "image1", maxCount: 1 },
{ name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]),
  createProduct);
productRoute.get("/:id", getOneProduct)
productRoute.get("/", getAllProducts)
productRoute.put("/:id", updateProduct)
productRoute.delete("/:id", deleteProduct)

module.exports = productRoute