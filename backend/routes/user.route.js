const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const { createUser, userReport } = require("../controllers/user.controller.js");


// POST route to create a user
router.post("/", createUser);

router.get("/", userReport);

module.exports = router;
