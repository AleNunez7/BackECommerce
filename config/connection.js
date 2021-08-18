const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://root:root@ha.zwnjg.mongodb.net/sprint3_twitter_ha`, // Base de datos en servidor(Agustin);
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
