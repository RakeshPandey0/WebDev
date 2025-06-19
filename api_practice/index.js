const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const log = require("./middleware/log.middleware");
const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => log(req, res, next));

//Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  const html = `<ul>
        <li>${user.first_name}</li>
    </ul>`;
  return res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const index = req.params.id - 1;
    users[index] = { id: index + 1, ...req.body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success" });
    });
  })
  .delete((req, res) => {
    const index = req.params.id - 1;
    users.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success" });
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
