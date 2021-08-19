const Product = require("../models/Product");

async function create(req, res) {
  if (
    req.body.name === "" ||
    req.body.description === "" ||
    req.body.price === "" ||
    req.body.stock === "" ||
    req.body.category === ""
  ) {
    res.status(404).json({ error: "Debe completar todos los campos" });
  } else if (
    await Product.findOne({
      $or: [{ name: req.body.name }],
    })
  ) {
    res.status(404).json({ error: "Este producto ya existe" });
  } else {
    const product = new Product(req.body);
    await product.save();
    res.json({ data: product });
  }
}

module.exports = {
  create,
};
