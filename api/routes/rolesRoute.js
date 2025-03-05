const { Router } = require("express");
const RolesController = require('../controllers/rolesController')
const autenticado = require("../middleware/autenticado");

const router = Router();

router.use(autenticado);

router
  .post('/', RolesController.cadastrar)
  .get('/', RolesController.listar)
  .get('/:id', RolesController.buscar)
  .put('/:id', RolesController.editar)
  .delete('/:id', RolesController.deletar);

module.exports = router;
