const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const roleRoutes = require("./roleRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(userRoutes);
  app.use("/role", roleRoutes);
  app.use("/products", productRoutes);
};
