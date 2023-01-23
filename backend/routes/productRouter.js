const express = require("express");
const data = require("../src/data");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.json(data);
  //   console.log(data);
});

module.exports = productRouter;
