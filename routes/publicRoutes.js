const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const checkJwt = require("express-jwt");

publicRouter.get("/", pagesController.showHome);
/* publicRouter.post("/tokens", userController.tokens);
publicRouter.get("/products", pagesController.showProducts);
publicRouter.get("/product", pagesController.showProduct);
publicRouter.get("/about-us", pagesController.showAboutUs);
publicRouter.post("/users", userController.createRegister);
publicRouter.delete("/:id", cartController.destroy);
publicRouter.post("/add-prduct", cartController.addProduct); */

// private

module.exports = publicRouter;
