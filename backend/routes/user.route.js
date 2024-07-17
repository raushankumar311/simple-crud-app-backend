const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const { createUser } = require("../controllers/user.controller.js");


// POST route to create a user
router.post("/", createUser);



module.exports = router;
