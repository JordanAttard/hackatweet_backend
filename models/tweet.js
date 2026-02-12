const mongoose = require('mongoose')

const tweetScheame = mongoose.Schema({
    tweet: {
        type: String,
        maxlength: 280
    },

    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    }],

    date: {
        type: Date,
        default: Date.now
    },

    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique : true
    }],

    hashtag: [{ type: String}]
})

const Tweet = mongoose.model('tweet', tweetScheame);

module.exports = Tweet