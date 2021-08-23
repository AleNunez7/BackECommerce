const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

publicRouter.get("/", pagesController.showHome);
publicRouter.post("/users", userController.createRegister);
publicRouter.post("/tokens", userController.tokens);

// private
publicRouter.patch("/users/:id", userController.update);
publicRouter.delete("/users/:id", userController.destroy);

/* 
publicRouter.get("/products", pagesController.showProducts);
publicRouter.get("/product", pagesController.showProduct);
publicRouter.get("/about-us", pagesController.showAboutUs);
publicRouter.post("/users", userController.createRegister);
publicRouter.post("/add-prduct", cartController.addProduct); */

module.exports = publicRouter;
