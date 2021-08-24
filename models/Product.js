const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  imageName: String,
  price: String,
  stock: String,
  category: String,
  state: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
};
