const publicRoutes = require("./publicRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

module.exports = (app) => {
  app.use("/products", productRoutes);
  app.use(publicRoutes);
  app.use(userRoutes);
};
