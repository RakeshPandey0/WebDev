const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const PORT = 3000;
const router = require("./routes/todo.route");

//Database
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}.`);
});
