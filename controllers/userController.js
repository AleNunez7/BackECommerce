const { User, validPassword } = require("../models/User");
const jwt = require("jsonwebtoken");

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

/* async function tokens(req, res) {
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
} */

module.exports = {
  createRegister,
};
