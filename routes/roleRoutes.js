const express = require("express");
const roleRoutes = express.Router();
const roleController = require("../controllers/roleController");

roleRoutes.get("/", roleController.showRoles);
roleRoutes.get("/:id", roleController.showRole);
roleRoutes.post("/", roleController.create);
roleRoutes.patch("/:id", roleController.update);
roleRoutes.delete("/:id", roleController.destroy);

module.exports = roleRoutes;
