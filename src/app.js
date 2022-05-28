const express = require("express");
const app = express();

const filmesRoute = require("../../servidor-paraolar/data/filmes.json");

app.use(express.json());

app.use("/filmes", filmesRoute);

module.exports = app;
