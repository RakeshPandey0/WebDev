const Todo = require("../models/Todo");
const homeURL = "http://localhost:3000/";

const getTodo = async (req, res) => {
  const todos = await Todo.find({});
  if (!todos) return res.status(404).json({ msg: "No todo entries found." });
  return res.render("index", { todoItems: todos });
};

const createTodo = async (req, res) => {
  try {
    const newTask = req.body.newTask;
    await Todo.create({ task: newTask, completed: false });
    return res.redirect(homeURL);
  } catch (err) {
    console.log("Error:", err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.body.id;
    await Todo.findByIdAndDelete(id);
    return res.redirect(homeURL);
  } catch (err) {
    console.log("Error:", err);
  }
};

const updateTodo = async (req, res) => {
  const _id = req.params.id;
  const newTask = req.body.updatedTask;
  const result = await Todo.findOneAndUpdate(
    { _id },
    { $set: { task: newTask } }
  );
  if (!result) return res.status(400).json({ msg: "task not found" });
  return res.redirect(homeURL);
};

const editTodo = async (req, res) => {
  try {
    const id = String(req.query.id);
    const todos = await Todo.find({});
    const todo = todos.filter((todo) => String(todo._id) === id);
    return res.render("index", {
      value: todo[0].task,
      todoItems: todos,
      id: id,
    });
  } catch (err) {
    console.error("Error while editing:", err);
  }
};

const searchTodo = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return getTodo(req, res);
    }
    // Case-insensitive regex search on "task"
    const results = await Todo.find({
      $or: [{ task: { $regex: query, $options: "i" } }],
    });
    res.render("index", { query: query, todoItems: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  editTodo,
  searchTodo,
};
