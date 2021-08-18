const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

publicRouter.get("/api/", (req, res) => res.json({ message: "Holis C:" }));
publicRouter.post("/tokens", userController.tokens);
publicRouter.get("/explore", pagesController.showExplore);
publicRouter.get("/profile/:username", pagesController.showProfile);
publicRouter.post("/users", userController.createRegister);

// private
publicRouter.use(
  checkJwt({ secret: process.env.TOKEN_STRING_SECRETO, algorithms: ["HS256"] })
);
publicRouter.get("/home", pagesController.showHome);
publicRouter.post("/follow/:id", userController.follow);
module.exports = publicRouter;
