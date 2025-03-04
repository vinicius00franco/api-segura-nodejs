const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const produto = require("./produtosRoute");
const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
const database = require("./databaseRoute");
const permissoes = require("./rolesRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/produto", produto);
  app.use("/usuarios", usuarios);
  app.use("/auth", auth);
  app.use("/database-conexao", database);
  app.use("/permissoes", permissoes);
};
