const { User, validPassword } = require("../models/User");
const jwt = require("jsonwebtoken");

async function createRegister(req, res) {
  if (
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
    user.password = null;
    res.json({ data: user });
  }
}

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

async function follow(req, res) {
  if (req.user.sub === req.params.id) {
    res.status(404).json({ error: "no te podes seguir a vos mismo" });
  } else {
    const user = await User.findById(req.user.sub); /// usario logeado
    const followingList = user.followingList; /// los que nosotros seguimos
    const indexFollowing = followingList.indexOf(req.params.id);

    const userToFollow = await User.findById(req.params.id); /// usuario que se va a seguir
    const followerList = userToFollow.followerList; /// a los que seguis
    const indexFollower = followerList.indexOf(req.user.sub);

    if (indexFollower >= 0) {
      followerList.pull({ _id: req.user.sub });
      followingList.pull({ _id: req.params.id });
    } else {
      followerList.push(req.user.sub);
      followingList.push(req.params.id);
    }
    await user.save();
    await userToFollow.save();
    res.json({ message: "se cambio el estado del usuario" });
  }
}

module.exports = {
  createRegister,
  tokens,
  follow,
};
