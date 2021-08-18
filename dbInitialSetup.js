const { User } = require("./models/User");
const Tweet = require("./models/Tweet");
module.exports = async () => {
  //await require("mongoose").connection.dropDatabase();
  await User.deleteMany();
  //await User.deleteMany({ password: "root" });
  await Tweet.deleteMany();
  await require("./seeders/userSeeder")();
  await require("./seeders/tweetSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
