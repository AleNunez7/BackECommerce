function redirectIfAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    return next();
  }
}
module.exports = redirectIfAuthenticated;
