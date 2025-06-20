const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  return res.json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "changed",
  });
  if (!user) {
    return res.status(404).json({ msg: "user not found" });
  }
  return res.json({ msg: "success" });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ msg: "success" });
};

const createUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "success", id: result._id });
};

const viewAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
        ${allDbUsers
          .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
          .join("")}
    </ul>
    `;
  res.send(html);
};

const viewUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  const html = `<ul>
        <li>${user.firstName} ${user.lastName} - ${user.email}</li>
    </ul>`;
  return res.send(html);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
  viewAllUsers,
  viewUserById,
};
