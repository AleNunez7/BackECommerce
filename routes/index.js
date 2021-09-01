const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const roleRoutes = require("./roleRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(userRoutes);
  app.use("/order", orderRoutes);
  app.use("/role", roleRoutes);
  app.use("/products", productRoutes);
};
