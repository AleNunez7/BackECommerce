const express = require("express");
const adminRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

/* adminRouter.get("/login", adminController.login); */
adminRouter.post("/product", productController.create);

module.exports = adminRouter;
