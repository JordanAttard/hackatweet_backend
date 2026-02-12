const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    tweet: { type: String, maxlength: 280 },
    username: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
    date: { type: Date, default: Date.now },
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
    hashtag: [{ type: String, default: [] }]
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet