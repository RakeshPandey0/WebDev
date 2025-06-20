const express = require("express");
const Router = express.Router();
const {
  viewAllUsers,
  viewUserById,
} = require("../controllers/user.controller");

Router.get("/", viewAllUsers);

Router.get("/:id", viewUserById);

module.exports = Router;
