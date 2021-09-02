const { Order } = require("../models/Order");
const { Product } = require("../models/Product");
const { User } = require("../models/User");
const moment = require("moment");

moment.locale("es");

async function createOrder(req, res) {
  const user = await User.findById(req.body.user._id);
  console.log(req.body);
  const item = req.body.cart;

  for (let i = 0; i < item.length; i++) {
    let product = await Product.findById(item[i]._id);
    product.stock = Number(product.stock) - item[i].quantity;

    await product.save();
  }

  const order = await new Order({
    user: user.username,
    orderList: req.body.cart,
    totalPrice: req.body.total,
    state: "comprado",
    date: moment().format("L"),
  });
  await order.save();
  res.json({ message: "Orden creada correctamente", order });
}

async function showOrder(req, res) {
  const orders = await Order.find();
  res.json(orders);
}

module.exports = {
  createOrder,
  showOrder,
};
