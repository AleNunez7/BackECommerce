const { User } = require("../models/User");
const { Product } = require("../models/Product");

async function showHome(req, res) {
  const products = await Product.find();
  res.json({ products });
}

async function showProducts(req, res) {
  const products = await Product.find();
  res.json({ products });
}

module.exports = {
  showHome,
  showProducts,
};
