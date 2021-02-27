const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const url = process.env.MONGOURI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("Database is Connected"));
app.use(express.json());

const hostellerRouter = require("./routes/hosteller");

app.use("/student", hostellerRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("/client/build"));
}

app.listen(port, () => console.log(`Server Running on port ${port}`));
