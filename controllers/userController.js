const { User, validPassword } = require("../models/User");
const { Product } = require("../models/Product");
const jwt = require("jsonwebtoken");

async function tokens(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (user && (await validPassword(password, user))) {
    const token = jwt.sign({ sub: user.id }, process.env.TOKEN_STRING_SECRETO, {
      expiresIn: "1 day",
    });
    user.password = null;
    res.json({ user, token });
  } else {
    res.status(404);
    res.json({ message: "credenciales incorrectas" });
  }
}

async function createRegister(req, res) {
  if (
    req.body.firstname === "" ||
    req.body.lastname === "" ||
    req.body.username === "" ||
    req.body.email === "" ||
    req.body.password === ""
  ) {
    res.status(404).json({ error: "Debe completar todos los campos" });
  } else if (
    await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    })
  ) {
    res.status(404).json({ error: "Este usuario ya existe" });
  } else {
    const user = new User(req.body);
    await user.save();
    res.json({ data: user });
  }
}

async function update(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  await user.save();
  res.json({ message: "Usuario modificado con exito" });
}

async function destroy(req, res) {
  const userDelete = await User.findById(req.params.id);
  if (userDelete) {
    await User.findByIdAndDelete(req.params.id);
  }
  res.json({ message: "el usuario fue eliminado correctamente" });
}

async function addToList(req, res) {
  const product = await Product.findById(req.params.id);
  const user = await User.findById(req.user.sub);

  user.shoppingList.push(product);
  res.json("El producto se guardo correctamente");
}

module.exports = {
  createRegister,
  tokens,
  destroy,
  update,
};
