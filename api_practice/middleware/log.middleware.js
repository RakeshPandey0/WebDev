const fs = require("fs");
function log(filename) {
  return (req, res, next) => {
    const log = `Time: ${Date.now()}, Method: ${req.method}, IP: ${req.ip}\n`;
    fs.appendFile(filename, log, (err, data) => {
      return next();
    });
  };
}

module.exports = log;
