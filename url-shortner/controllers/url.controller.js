const shortid = require("shortid");
const URL = require("../models/Url");
require("dotenv").config();

async function generateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "url required" });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render("home", { id: shortId, shortUrl: process.env.BASE_URL + `url/${shortId}` });
  // return res.status(201).json({ id: shortId });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if (!result) return res.status(400).json({ err: "invalid ID" });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
async function redirectURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  const redirectURL = entry.redirectURL;
  res.redirect(redirectURL);
}

module.exports = { generateShortUrl, getAnalytics, redirectURL };
