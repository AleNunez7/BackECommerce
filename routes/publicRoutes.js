const express = require("express");
const publicRoutes = express.Router();
const pagesController = require("../controllers/pagesController");

publicRoutes.get("/", pagesController.showHome);

module.exports = publicRoutes;
