"use strict";

const helper = require("./helper.js");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("index", {});
});

// app.get("/form", (req, res) => res.render("index", {}));


app.post("/calculate", function(req, res) {
    let result = helper.calc(req.body);
    let data = helper.format(req.body, result);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
});

app.listen(5000);