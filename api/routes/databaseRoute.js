const express = require('express');
const DatabaseController = require('../controllers/databaseController');
const autenticado = require("../middleware/autenticado");

const router = express.Router();

router.use(autenticado);

// Define your database connection test route here
router.get('/test-connection', DatabaseController.testConnection);

module.exports = router;