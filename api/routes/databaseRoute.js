const express = require('express');
const DatabaseController = require('../controllers/databaseController');

const router = express.Router();

// Define your database connection test route here
router.get('/test-connection', DatabaseController.testConnection);

module.exports = router;