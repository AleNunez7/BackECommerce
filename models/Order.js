const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  orderList: [],
  state: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Order,
};
