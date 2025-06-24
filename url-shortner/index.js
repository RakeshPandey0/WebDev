const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/static.route");
const userRoute = require("./routes/user.route");
const connectDB = require("./config/db");
const { protect, checkAuth } = require("./middlewares/auth.middleware");
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectDB("mongodb://127.0.0.1:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", protect, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("App listening in port:", PORT);
});
