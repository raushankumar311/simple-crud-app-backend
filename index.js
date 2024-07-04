require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.models");
const productRoute = require("./routes/product.route.js");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});
