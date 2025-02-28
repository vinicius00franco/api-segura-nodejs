const bodyParser = require("body-parser");

const produto = require("./produtosRoute");
const usuarios = require("./usuariosRoute");

module.exports = (app) => {
  app.use('/produto', produto);
  app.use('/usuarios', usuarios);
};