const Tweet = require("../models/Tweet");
const { User } = require("../models/User");

async function create(req, res) {
  if (req.body.content === "") {
    res.status(404).json({ message: "Error" });
  } else {
    const user = await User.findById(req.user.sub);
    user.password = null;
    const tweet = new Tweet({
      text: req.body.content,
      author: user,
      likes: [],
    });

    await tweet.save();
    res.json(tweet);
  }
}
//[BASURA] SI EL USUARIO BORRA EL TWIT VA A SEGUIR TENIENDO GUARDADO EN TWEETSLIKE EL ID DE ESTE TWEET. FALTA ELIMINAR ESO :c
async function destroy(req, res) {
  const tweetDelete = await Tweet.findById(req.params.id);
  if (req.user.sub == tweetDelete.author._id) {
    await Tweet.findByIdAndRemove(req.params.id);
  }
  res.json({ message: "El tweet fue eliminado correctamente" });
}

async function like(req, res) {
  const tweet = await Tweet.findById(req.params.id);
  const index = tweet.likes.indexOf(req.user.sub);

  if (index >= 0) {
    tweet.likes.pull({ _id: req.user.sub });
  } else {
    tweet.likes.push({ _id: req.user.sub });
  }

  await tweet.save();
  res.json({ message: "se cambio el estado del like " });
}

module.exports = {
  create,
  destroy,
  like,
};
