const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Set view engine to EJS
app.set("view engine", "ejs");

//Array to store to-do items

let todoItems = [];
let index = null;
//Routes
app.get("/", (req, res) => {
  res.render("index", { todoItems: todoItems, value: todoItems[index] });
});

app.post("/edit", (req, res) => {
  index = req.body.index;
  res.redirect("/");
});

app.post("/addEdit", (req, res) => {
  if (index) {
    todoItems[index] = req.body.newItem
  } else {
    let newItem = req.body.newItem;
    if (newItem) {
      todoItems.push(newItem);
    }
  }
  index = null;
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  let index = req.body.index;
  todoItems.splice(index, 1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000.");
});
