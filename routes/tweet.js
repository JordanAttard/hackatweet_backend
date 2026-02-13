var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweet')

router.get('/', (req, res) => {
  Tweet.find()
    .populate("username")
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/', async (req, res) => {
  try {
    const newTweet = new Tweet({
        tweet: req.body.tweet,
        username: [req.body.username],
        hashtag: req.body.hashtag
    })

    const savedTweet = await newTweet.save()

    res.status(201).json(savedTweet)

  } catch(err) {
    res.status(500).json({ result: false, error: err.message})
  }
})

router.get('/trends', async(req, res) => {
    const trends = await Tweet.aggregate([
      { $unwind: "$hashtag" },
      { $group: { _id: "$hashtag", count: { $sum: 1}}},
      { $sort: { count: -1}}
    ]);

    res.json(trends)
})

module.exports = router