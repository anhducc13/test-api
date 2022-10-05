const fs = require("fs");

module.exports = (request, response) => {
  let rawdata = fs.readFileSync("data.json");
  let list = JSON.parse(rawdata);
  setTimeout(() => {
    response.json(list);
  }, 1000);
};
