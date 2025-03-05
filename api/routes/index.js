const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const produto = require("./produtosRoute");
const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
const database = require("./databaseRoute");
const roles = require("./rolesRoute");
const permissao = require("./permissao");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/produtos", produto);
  app.use("/usuarios", usuarios);
  app.use("/auth", auth);
  app.use("/database", database);
  app.use("/roles", roles);
  app.use("/permissoes", permissao);
};
