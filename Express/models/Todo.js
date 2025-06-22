const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: { type: String, require: true, unique: true },
    completed: { type: Boolean },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
