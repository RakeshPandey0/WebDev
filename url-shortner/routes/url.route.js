const express = require("express");
const Router = express.Router();
const {
  generateShortUrl,
  getAnalytics,
  redirectURL
} = require("../controllers/url.controller");

Router.post("/", generateShortUrl);
Router.get("/analytics/:shortId", getAnalytics);
Router.get("/:shortId", redirectURL);

module.exports = Router;
