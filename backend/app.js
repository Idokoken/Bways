const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const mongoose = require("mongoose");
const cors = require("cors");
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// database setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () =>
  console.log(`${chalk.magenta("error connecting to Bways database")}`)
);
db.once("open", () =>
  console.log(`${chalk.magenta("connected to Bways database successfully")}`)
);

//middleware setup
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route setup
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);

app.listen(port, () => console.log("listening on port " + chalk.magenta(8086)));
