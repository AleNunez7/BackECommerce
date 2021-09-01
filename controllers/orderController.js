const { Order } = require("../models/Order");
const { Product } = require("../models/Product");
const { User } = require("../models/User");

async function createOrder(req, res) {
  const user = await User.findById(req.body.user._id);
  const order = new Order({
    user: user.username,
    orderList: req.body.cart,
    totalPrice: req.body.total,
    state: "comprado",
  });
  await order.save();
  res.json({ message: "Orden creada correctamente" });
}

async function showOrder(req, res) {
  const orders = await Order.find();
  res.json(orders);
}

module.exports = {
  createOrder,
  showOrder,
};
