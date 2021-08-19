const { Product } = require("../models/Product");

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
      name: req.body.name,
    })
  ) {
    res.status(404).json({ error: "Este producto ya existe" });
  } else {
    const product = new Product(req.body);
    await product.save();
    res.json({ data: product });
  }
}

async function destroy(req, res) {
  const productDelete = await Product.findById(req.params.id);
  if (productDelete) {
    await Product.findByIdAndDelete(req.params.id);
  }
  res.json({ message: "el producto fue eliminado correctamente" });
}

async function update(req, res) {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  await updateProduct.save();
  res.json({ data: updateProduct });
}

module.exports = {
  create,
  destroy,
  update,
};
