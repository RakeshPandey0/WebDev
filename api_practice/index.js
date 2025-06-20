const express = require("express");
const log = require("./middleware/log.middleware");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => log(req, res, next));

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/user-app")
  .then(() => console.log("Mongodb Connected!"))
  .catch((err) => console.log("Mongodb error:", err));

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String },
    gender: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

//Routes
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
    return res.json({ msg: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ msg: "success" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "success" });
});

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
        ${allDbUsers
          .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
          .join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  const html = `<ul>
        <li>${user.firstName} ${user.lastName} - ${user.email}</li>
    </ul>`;
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
