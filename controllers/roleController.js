const { Role } = require("../models/Role");

async function create(req, res) {
  const role = new Role(req.body);
  await role.save();
  res.json(role);
}

async function showRole(req, res) {
  const role = await Role.findById(req.params.id);
  res.json(role);
}

async function showRoles(req, res) {
  const role = await Role.find();
  res.json(role);
}

async function update(req, res) {
  const role = await Role.findOneAndUpdate({ _id: req.params.id }, req.body);
  await role.save();
  res.json({ message: "Role modificado con exito" });
}

async function destroy(req, res) {
  const role = await Role.findById(req.params.id);
  if (role) {
    await Role.findByIdAndDelete(req.params.id);
  }
  res.json({ message: "el role fue eliminado correctamente" });
}

module.exports = {
  create,
  showRole,
  update,
  destroy,
  showRoles,
};
