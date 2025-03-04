const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const produto = require("./produtosRoute");
const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
const database = require("./databaseRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/produto", produto);
  app.use("/usuarios", usuarios);
  app.use("/auth", auth);
  app.use("/database-conexao", database);
};
