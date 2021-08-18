const express = require("express");
const tweetRouter = express.Router();
const tweetController = require("../controllers/tweetController");
const checkJwt = require("express-jwt");

tweetRouter.use(
  checkJwt({ secret: process.env.TOKEN_STRING_SECRETO, algorithms: ["HS256"] })
);
tweetRouter.post("/", tweetController.create);
tweetRouter.delete("/:id", tweetController.destroy);
tweetRouter.post("/like/:id", tweetController.like);

module.exports = tweetRouter;
