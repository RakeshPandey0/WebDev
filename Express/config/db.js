const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-express");
    console.log("Database connected.");
  } catch (err) {
    console.log("Database connection error: ", err);
  }
};

module.exports = connectDB;
