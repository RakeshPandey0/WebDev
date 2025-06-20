const express = require("express");
const connectDB = require("./config/db");

const log = require("./middleware/log.middleware");

const apiRouter = require("./routes/api.routes");
const viewRouter = require("./routes/view.routes");

const app = express();
const PORT = 8000;

// Connection
connectDB("mongodb://127.0.0.1:27017/user-app");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(log("log.txt"));

//Routes
app.use("/api/users", apiRouter);
app.use("/users", viewRouter);

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
