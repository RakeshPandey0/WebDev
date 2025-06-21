const express = require("express");
const urlRoute = require("./routes/url.route");
const connectDB = require("./config/db");
const URL = require("./models/Url");
const app = express();
const PORT = 8001;

app.use(express.json());
connectDB("mongodb://127.0.0.1:27017/short-url");

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log("App listening in port:", PORT);
});
