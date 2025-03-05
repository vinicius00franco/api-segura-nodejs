const { Router } = require("express");
const PermissaoController = require("../controllers/permissaoController");
const autenticado = require("../middleware/autenticado");

const router = Router();

router.use(autenticado);

router
  .post('', PermissaoController.cadastrar)
  .get('', PermissaoController.listar)
  .get('/:id', PermissaoController.buscar)
  .put('/:id', PermissaoController.atualizar)
  .delete('/:id', PermissaoController.deletar);

module.exports = router;
