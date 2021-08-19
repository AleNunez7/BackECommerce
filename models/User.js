const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const saltBcrypt = 10;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  role: String,
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
