const express = require("express");
const Router = express.Router();
const {
  generateShortUrl,
  getAnalytics,
} = require("../controllers/url.controller");

Router.post("/", generateShortUrl);
Router.get("/analytics/:shortId", getAnalytics);

module.exports = Router;
