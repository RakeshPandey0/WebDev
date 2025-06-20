const express = require("express");
const Router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/user.controller");

Router.route("/").get(getAllUsers).post(createUser);

Router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = Router;
