const Tweet = require("../models/Tweet");
const { User } = require("../models/User");

async function showProfile(req, res) {
  const user = await User.findOne({ username: req.params.username });

  if (!user) {
    res.status(404).json({ message: "user not found" });
  } else {
    const tweets = await Tweet.find({ author: user._id }).populate("author");
    tweets.reverse();
    const filterTweets = tweets.slice(0, 20);
    user.password = null;
    res.json({ tweets: filterTweets, user });
  }
}

async function showHome(req, res) {
  const user = await User.findById(req.user.sub);

  const tweets = await Tweet.find({
    author: { $in: [...user.followingList, user] },
  })
    .populate("author")
    .sort({
      createdAt: -1,
    });
  const filterTweets = tweets.slice(0, 20);
  res.json({ tweets: filterTweets, user });
}

async function showExplore(req, res) {
  const tweets = await Tweet.find().populate("author").sort({
    createdAt: -1,
  });

  res.json(tweets.slice(0, 20));
}

module.exports = {
  showHome,
  showProfile,
  showExplore,
};
