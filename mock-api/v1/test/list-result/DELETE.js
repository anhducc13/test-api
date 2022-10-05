const fs = require("fs");

module.exports = (request, response) => {
  fs.writeFileSync("data.json", JSON.stringify([], null, 2));
  setTimeout(() => {
    response.json("Success");
  }, 1000);
};
