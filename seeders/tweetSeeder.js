const { tweetsSize, usersSize } = require("../config/seedersConfig");
const { User } = require("../models/User");
const Tweet = require("../models/Tweet");
const faker = require("faker");
faker.locale = "es";

module.exports = async () => {
  const tweets = [];
  const users = await User.find();
  for (let i = 0; i < tweetsSize; i++) {
    tweets.push({
      text: faker.lorem.paragraphs(),
      author: users[Math.floor(Math.random() * usersSize)]._id,
    });
  }
  if (await Tweet.insertMany(tweets))
    console.log("[Database] ¡Los Tweets de prueba fueron insertados!");
  else console.log("[Error][Database] Error al insertar los Tweets");
};
