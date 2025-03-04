const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/authController.js");

// Define your auth routes here
router.post('/login', AuthController.login);

module.exports = router;
