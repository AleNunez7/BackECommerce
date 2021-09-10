const express = require("express");
const orderRoutes = express.Router();
const orderController = require("../controllers/orderController");

orderRoutes.get("/", orderController.showOrder);
orderRoutes.get("/:id", orderController.showOrderById);
orderRoutes.post("/success", orderController.createOrder);

module.exports = orderRoutes;
