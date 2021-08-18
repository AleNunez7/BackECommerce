const { usersSize } = require("../config/seedersConfig");
const { User } = require("../models/User");
const faker = require("faker");
faker.locale = "es";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < usersSize; i++) {
    users.push({
      firstname: "user" + i,
      lastname: " ._. " + i,
      email: "user" + i + "@email.fake",
      username: "user" + i,
      password: "root",
      description: faker.lorem.sentence(5),
    });
  }
  if (await User.insertMany(users))
    console.log("[Database] ¡Los Usuarios de prueba fueron insertados!");
  else console.log("[Error][Database] Error al insertar los Usuarios");
};
