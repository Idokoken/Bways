const express = require("express");
const data = require("../src/data");

const productRouter = express.Router();

//get all products
productRouter.get("/", (req, res) => {
  res.json(data);
  //   console.log(data);
});

//get one product
productRouter.get("/:id", (req, res) => {
  const product = data.find((item, i) => item._id === req.params.id);
  res.json(product);
});

module.exports = productRouter;
