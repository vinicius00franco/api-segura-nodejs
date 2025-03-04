'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable('permissoes', 'roles');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable('roles', 'permissoes');
  }
};