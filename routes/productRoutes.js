const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

productRoutes.get("/:id", productController.showProduct);
/* productRoutes.use(
  checkJwt({ secret: process.env.TOKEN_STRING_SECRETO, algorithms: ["HS256"] })
); */
productRoutes.patch("/:id", productController.update);
productRoutes.post("/", productController.create);
productRoutes.delete("/:id", productController.destroy);

module.exports = productRoutes;
