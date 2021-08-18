const express = require("express");
const adminRouter = express.Router();
const checkJwt = require("express-jwt");

adminRouter.get("/login", adminController.login);

module.exports = adminRouter;
