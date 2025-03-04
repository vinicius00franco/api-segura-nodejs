const { Router } = require('express')
const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleware/autenticado');

const router = express.Router();

router.use(autenticado)

router
    .post('/cadastrar', UsuarioController.cadastrar)
    .get('/buscar/todos', UsuarioController.buscarTodosUsuarios)
    .get('/buscar/id/:id', UsuarioController.buscarUsuarioPorId)
    .put('/editar/id/:id', UsuarioController.editarUsuario)
    .delete('/deletar/id/:id', UsuarioController.deletarUsuario)

module.exports = router