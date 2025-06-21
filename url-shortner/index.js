const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/static.route");
const connectDB = require("./config/db");
const URL = require("./models/Url");
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB("mongodb://127.0.0.1:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoute);
app.use("/", staticRoute);
app.listen(PORT, () => {
  console.log("App listening in port:", PORT);
});
