const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tweetSchema = new Schema(
  {
    text: String,
    author: { type: Schema.Types.ObjectId, ref: "User" }, // Usuario que lo creo
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
