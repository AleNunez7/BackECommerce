const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: String,
  orderList: [],
  totalPrice: String,
  state: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Order,
};
