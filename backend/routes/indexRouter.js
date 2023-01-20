const express = require("express");

const indexRouter = express.Router();

//home page
indexRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "hello home" });
  console.log("hello home");
});

//contact page
indexRouter
  .route("/contact")
  .get((req, res) => res.status(200).json({ msg: "hello contact" }))
  .post(async (req, res) => {
    try {
      const message = await Contact.create(req.body);
      const newMessage = await message.save();
      res.status(200).json({ messsage: newMessage });
    } catch (error) {
      res.status(500).json({ err: "error posting message" });
    }
  });

module.exports = indexRouter;
