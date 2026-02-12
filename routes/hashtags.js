var express = require("express");
var router = express.Router();

require("../models/connection");
const Hashtag = require("../models/hashtags");

router.get("/trends", (req, res) => {
  Hashtag.find().then((data) => {
    if (data.length > 0) {
      const trends = data.map((tag) => {
        return {
          tagName: tag.tagName,
          count: tag.tweets.length,
        };
      });

      trends.sort((a, b) => b.count - a.count); //je ne sais pas si on en a besoin

      res.json({ result: true, hashtags: trends });
    } else {
      res.json({ result: true, hashtags: [] });
    }
  });
});

router.get("/:tagName", (req, res) => {
  Hashtag.findOne({ tagName: { $regex: new RegExp(req.params.tagName, "i") } })
    .populate("tweets")
    .then((data) => {
      if (data) {
        res.json({ result: true, tweets: data.tweets });
      } else {
        res.json({ result: false, error: "Hashtag not found" });
      }
    });
});

module.exports = router;
