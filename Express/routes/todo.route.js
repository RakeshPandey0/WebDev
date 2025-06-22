const express = require("express");
const router = express.Router();

const {
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  editTodo,
  searchTodo,
} = require("../controllers/todo.controller");

router.route("/").get(getTodo).post(createTodo);

router.post("/delete", deleteTodo);

router.get("/edit", editTodo);

router.post("/update/:id", updateTodo);

router.get("/search", searchTodo);

module.exports = router;
