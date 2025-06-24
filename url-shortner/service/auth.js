const jwt = require("jsonwebtoken");
require("dotenv").config();

function setUser(user) {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET);
}

function getUser(token) {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { setUser, getUser };
