const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

publicRouter.get("/", (req, res) => res.json({ message: "Holis C:" }));
publicRouter.post("/tokens", userController.tokens);
publicRouter.get("/products", pagesController.showProducts);
publicRouter.get("/product", pagesController.showProduct);
publicRouter.get("/about-us", pagesController.showAboutUs);
publicRouter.post("/users", userController.createRegister);
publicRouter.delete("/:id", cartController.destroy);
publicRouter.post("/add-prduct", cartController.addProduct);

// private

module.exports = publicRouter;
