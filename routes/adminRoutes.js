const express = require("express");
const adminRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

/* adminRouter.get("/login", adminController.login); */
adminRouter.post("/product", productController.create);
adminRouter.delete("/product/:id", productController.destroy);
adminRouter.patch("/product/:id", productController.update);

module.exports = adminRouter;
