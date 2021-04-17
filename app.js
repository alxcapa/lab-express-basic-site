const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", function (req, res, next) {
  res.sendFile(__dirname + `/views/home-page.html`);
});

app.get("/about", function (req, res, next) {
  res.sendFile(__dirname + `/views/about-page.html`);
});

app.get("/works", function (req, res, next) {
  res.sendFile(__dirname + `/views/works-page.html`);
});

app.get("/gallery", function (req, res, next) {
  res.sendFile(__dirname + `/views/gallery-page.html`);
});

app.listen(3000);
