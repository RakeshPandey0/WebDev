const fs = require("fs");
const log = (req, res, next) => {
  const log = `Time: ${Date.now()}, Method: ${req.method}, IP: ${req.ip}\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    return next();
  });
};

module.exports = log;
