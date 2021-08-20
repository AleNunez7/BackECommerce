const publicRoutes = require("./publicRoutes");
const productRouter = require("./productRouter");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/products", productRouter);
};
