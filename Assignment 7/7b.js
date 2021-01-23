"use strict";

let fs = require("fs");
var path = require('path');
let directory = process.argv.slice(2)[0];

fs.watch(directory, { encoding: "buffer" }, (eventType, filename) => {
  if (eventType === "change") {
    console.log(`${eventType}d ${filename}`);
    let file = path.join(directory, filename.toString());
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
});
