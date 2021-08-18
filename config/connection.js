const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://joaquin:1234@shohack.zb8b8.mongodb.net/ShoHack`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => {
    console.log("¡Conexión con la base de datos establecida!");
  })
  .on("error", (error) => console.log(error));

module.exports = mongoose;
