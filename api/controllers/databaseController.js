const express = require("express");
const sequelize = require("../models").sequelize;

class DatabaseController {
  static async testConnection(req, res) {
    try {
      await sequelize.authenticate();
      res.status(200).send("Connection has been established successfully.");
    } catch (error) {
      res.status(500).send(`Unable to connect to the database: ${error.message}`);
    }
  }
}

module.exports = DatabaseController;
