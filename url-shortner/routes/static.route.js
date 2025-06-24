const express = require("express");
const URL = require("../models/Url");
require("dotenv").config();
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const userId = req.user._id;
  const userUrls = await URL.find({ createdBy: userId });
  // const allUrls = await URL.find({});
  return res.render("home", { urls: userUrls, baseUrl: process.env.BASE_URL });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
