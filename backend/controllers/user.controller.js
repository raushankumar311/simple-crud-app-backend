const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const userReport = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch(error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  userReport
};
