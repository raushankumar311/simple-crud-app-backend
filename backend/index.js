const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Product = require("./models/product.models");
const productRoute = require("./routes/product.route.js");
const User = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

app.use("/api/products", productRoute);

app.use("/api/users", userRoute);

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



// Login route

app.post("/api/users/login", async (req, res) => {
  const { email, password, userRole } = req.body;

  try {
    // Check if userRole is provided and not empty
    if (!userRole) {
      console.log("User role not selected");
      return res.status(400).json({ message: "Please select a user role" });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      console.log("Incorrect password for user:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Ensure role comparison is case-insensitive and handle undefined scenario
    if (!user.userRole || user.userRole.toLowerCase() !== userRole.toLowerCase()) {
      console.log("Incorrect role for user:", email, "Expected:", user.userRole, "Received:", userRole);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Login successful for user:", email);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: error.message });
  }
});
