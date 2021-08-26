const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

userRoutes.post("/tokens", userController.tokens);
/* userRoutes.use(
  checkJwt({ secret: process.env.TOKEN_STRING_SECRETO, algorithms: ["HS256"] })
); */
userRoutes.get("/users/:id", userController.showUser);
userRoutes.post("/users", userController.createRegister);
userRoutes.patch("/users/:id", userController.update);
userRoutes.delete("/users/:id", userController.destroy);

module.exports = userRoutes;
