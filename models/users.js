const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }, //hashé
  token: { type: String, required: true }, //uid2
});

const User = mongoose.model("users", userSchema);
module.exports = User;
