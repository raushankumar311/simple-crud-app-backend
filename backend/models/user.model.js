const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
   email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
