const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

productRouter.use(
  checkJwt({ secret: process.env.TOKEN_STRING_SECRETO, algorithms: ["HS256"] })
);
productRouter.get("/:id", productController.show);
productRouter.patch("/:id", productController.update);
productRouter.post("/", productController.create);
productRouter.delete("/:id", productController.destroy);

module.exports = productRouter;
