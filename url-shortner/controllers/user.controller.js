const User = require("../models/User");
const { setUser } = require("../service/auth");
const bcrypt = require("bcryptjs");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({ name, email, password: hashedPassword });
  return res.redirect("/login");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.redirect("/login", {
      error: "no user found",
    });
  const match = bcrypt.compare(password, user.password);
  if (match) {
    const token = setUser(user);
    res.cookie("uid", token);
    return res.redirect("/");
  } else {
    return res.redirect("/login", {
      error: "invalid password",
    });
  }
}

module.exports = { handleUserSignUp, handleUserLogin };
