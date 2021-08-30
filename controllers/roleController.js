const { Role } = require("../models/Role");

async function newRole(req, res) {
  const role = new Role(req.body);
  await role.save();
  res.json(role);
}

async function showRole(req, res) {
  const role = await Role.find();
  res.json(role);
}

module.exports = {
  newRole,
  showRole,
};
