function userLoged(req, res, next) {
  const { token } = req.header;
  jwt.verify(token, process.env.TOKEN_STRING_SECRETO, function (err, decoded) {
    if (err) {
      res.status(404).res.json({ message: "Error" });
    } else {
      return next();
    }
  });
}

module.exports = userLoged;
