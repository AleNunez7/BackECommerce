const { User } = require("../models/User");
const { Product } = require("../models/Product");

async function showHome(req, res) {
  const products = await Product.find();
  const users = await User.find();
  res.json({ products, users });
}

module.exports = {
  showHome,
};
