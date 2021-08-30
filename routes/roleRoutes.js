const express = require("express");
const roleRoutes = express.Router();
const roleController = require("../controllers/roleController");

roleRoutes.get("/role", roleController.showRole);
roleRoutes.post("/role", roleController.newRole);

module.exports = roleRoutes;
