const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
const PORT = 3000;

//storing the file in uploads folder with name format "<Date.now()>-<filename>"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

//creating middleware that stores file using the above logic
const upload = multer({ storage });

//middleware to parse form data
app.use(express.urlencoded({ extended: true }));

//embed view engine and view directory
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//routes
app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/", upload.single("filename"), (req, res) => {
  res.render("homepage");
});

//start the server
app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
