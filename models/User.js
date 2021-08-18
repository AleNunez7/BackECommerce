const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltBcrypt = 10;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  description: String, // Biografia
  profilePicture: String,
  tweetsLike: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  tweetsList: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  followingList: [{ type: Schema.Types.ObjectId, ref: "User" }], // Seguidores
  followerList: [{ type: Schema.Types.ObjectId, ref: "User" }], // Seguidos
});

userSchema.pre("validate", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, saltBcrypt);
    return next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model("User", userSchema);

const validPassword = async (plaintextPassword, user) => {
  return await bcrypt.compare(plaintextPassword, user.password);
};

module.exports = {
  User,
  validPassword,
};
