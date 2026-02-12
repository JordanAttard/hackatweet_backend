const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  username: { type: String, unique: true, required: true },
  password: String, //hashé
  token: String, //uid2
});

const User = mongoose.model("users", userSchema);
module.exports = User;
