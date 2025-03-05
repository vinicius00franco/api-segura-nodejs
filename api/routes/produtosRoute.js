const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const autenticado = require("../middleware/autenticado");

const router = Router()

router.use(autenticado);

router
  .post('', ProdutoController.cadastrarProduto)
  .get('', ProdutoController.buscarTodosProdutos)
  .get('/:id', ProdutoController.buscarProdutoPorId)
  .put('/:id', ProdutoController.editarProduto)
  .delete('/:id', ProdutoController.deletarProdutoPorId)

module.exports = router