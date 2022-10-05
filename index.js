var express = require("express");
var apiMocker = require("connect-api-mocker");
var cors = require("cors");
const port = 3000;
var app = express();
var fs = require("fs");

const requestTime = function (request, res, next) {
  const data = {
    time: new Date().toISOString(),
    method: request.method,
    url: request.url,
    body: request.body,
    query: request.query,
    headers: request.headers,
  };
  if (request.url.startsWith("/v1/test/list-result")) {
    return next();
  }
  const rawdata = fs.readFileSync("data.json");
  const list = JSON.parse(rawdata);
  list.push(data);
  fs.writeFile("data.json", JSON.stringify(list, null, 2), (err) => {
    if (err) throw err;
    next();
  });
};

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(requestTime);
app.use("/", apiMocker("mock-api"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
