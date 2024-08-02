const express = require("express");
const Product = require("../models/product.models.js");
const router = express.Router();
const { getProduct, getProducts, createProduct, updateProduct, deleteProduct, getInventoryReport } =
  require("../controllers/product.controller.js");

// POST route to create a product
router.post("/", createProduct);

// Route to get all the products
router.get("/", getProducts);

// Route to get the products having quantity = 0
router.get("/zero-quantity", getInventoryReport);

// Route to get a product by id
router.get("/:id", getProduct);

// Route to update(PUT) a product by id
router.put("/:id", updateProduct);

// Route to delete(DELETE) a product by id
router.delete("/:id", deleteProduct);



module.exports = router;
