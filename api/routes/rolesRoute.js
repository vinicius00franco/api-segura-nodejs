const { Router } = require("express");
const RolesController = require('../controllers/rolesController')

const router = Router();

router
  .post("/cadastrar", RolesController.cadastrar)
  .get("/listar", RolesController.listar)
  .get("/buscar/:id", RolesController.buscar)
  .delete("/deletar/:id", RolesController.deletar)
  .put("/editar/:id", RolesController.editar);

module.exports = router;
