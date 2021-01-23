"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello world"));

app.get("/form", (req, res) => res.render("form", { formTitle: "Test form" }));

app.post("/formdata", function(req, res) {
    let body = req.body;
    res.render("formresult", { email: body.email, hours: body.hourNum, comment: body.comment });
});

app.post("/jsondata", function(req, res) {
    res.render("formresult", {data: req.body});
});

app.listen(5000);
