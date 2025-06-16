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
  todoItems.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  res.render("index", {
    todoItems: todoItems,
    value: todoItems[index],
    query: null,
  });
});

app.post("/edit", (req, res) => {
  index = req.body.index;
  res.redirect("/");
});

app.post("/addEdit", (req, res) => {
  if (index !== null) {
    todoItems[index] = req.body.newItem;
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

app.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = todoItems.filter((item) =>
    item.toLowerCase().includes(query)
  );
  res.render("index", { todoItems: results, value: null, query: query });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000.");
});
