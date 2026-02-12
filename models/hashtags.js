const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema({
  tagName: { type: String, required: true, unique: true },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "tweets" }], // Lien vers les tweets
});

const Hashtag = mongoose.model("hashtags", hashtagSchema);
module.exports = Hashtag;
