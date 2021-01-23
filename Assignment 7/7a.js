"use strict";

const operations = {
  "/multiply": {
    sign: "*",
    action: (a, b) => {
      return a * b;
    }
  },
  "/divide": {
    sign: "/",
    action: (a, b) => {
      return a / b;
    }
  },
  "/add": {
    sign: "+",
    action: (a, b) => {
      return a + b;
    }
  },
  "/substract": {
    sign: "-",
    action: (a, b) => {
      return a - b;
    }
  }
};

let re = new RegExp("^[0-9]+$");

let http = require("http");
let url = require("url");
let server = http.createServer(function(req, res) {
  try {
    let operation = url.parse(req.url, true).pathname;
    if (!(operation in operations)) {
      res.statusCode = 400;
      res.end("Operation is not supported");
    }
    let param1 = req.headers["parameter1"];
    let param2 = req.headers["parameter2"];
    let r1 = re.test(param1);
    let r2 = re.test(param2);
    if (!r1 || !r2) {
      res.statusCode = 400;
      res.end("Invalid parameters");
    }
    let result = operations[operation].action(parseInt(param1), parseInt(param2));
    res.end(formatRepsonse(operation, param1, param2, result));
  } catch (er) {
    res.end("Server error");
  }
});

server.listen(8000, "localhost");

function formatRepsonse(operation, param1, param2, result) {
  return `<!DOCTYPE html><html lang="en"> <head> <meta charset="UTF-8" /> <title>Result</title> <style> body { background: #242831; color: #fafbff; font-family: "Source Sans Pro"; } .container { height: 100%; width: 100%; display: flex; position: fixed; align-items: center; justify-content: center; } .container > div { font-size: 100px; } </style> </head> <body> <div class="container">
  <div>${param1} ${operations[operation].sign} ${param2} = ${result}</div></div> </body></html>`;
}
