const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello" }).status(200);
});

app.get("/add/:number/:additor", (req, res) => {
  let result = parseInt(req.params.number) + parseInt(req.params.additor);
  res.send({ result }).status(200);
});

app.get("/substract/:number/:substractor", (req, res) => {
  let result = parseInt(req.params.number) - parseInt(req.params.substractor);
  res.send({ result }).status(200);
});

module.exports = app;