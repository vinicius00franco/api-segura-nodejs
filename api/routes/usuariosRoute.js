const { Router } = require('express')
const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleware/autenticado');

const router = express.Router();

// router.use(autenticado)

router
    .post('/', UsuarioController.cadastrar)
    .get('/', UsuarioController.buscarTodosUsuarios)
    .get('/:id', UsuarioController.buscarUsuarioPorId)
    .put('/:id', UsuarioController.editarUsuario)
    .delete('/:id', UsuarioController.deletarUsuario)

module.exports = router