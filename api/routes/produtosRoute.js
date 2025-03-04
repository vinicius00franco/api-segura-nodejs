const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')

const router = Router()

router
  .post('/cadastrar', ProdutoController.cadastrarProduto)
  .get('/buscar/todos', ProdutoController.buscarTodosProdutos)
  .get('/buscar/id/:id', ProdutoController.buscarProdutoPorId)
  .delete('/deletar/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/editar/id/:id', ProdutoController.editarProduto)

module.exports = router