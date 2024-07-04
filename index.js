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
  .connect(
    "mongodb+srv://raushankumarthakur311:oZl9i6cuYEslJKtS@backend-api.9hkonku.mongodb.net/?retryWrites=true&w=majority&appName=Backend-API"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});
