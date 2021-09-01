const { Order } = require("../models/Order");
const { Product } = require("../models/Product");

async function createOrder(req, res) {
  const order = new Order({
    user: req.body.user._id,
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
