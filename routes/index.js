const publicRoutes = require("./publicRoutes");
const tweetRoutes = require("./tweetRoutes");
const showUserAllEjs = require("../middlewares/showUserAllEjs");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/tweets", tweetRoutes);
};
