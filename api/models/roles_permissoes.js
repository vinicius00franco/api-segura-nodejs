'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles_permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roles_permissoes.belongsTo(models.roles, {
        foreignKey: 'role_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      roles_permissoes.belongsTo(models.permissoes, {
        foreignKey: 'permissao_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  roles_permissoes.init({
    role_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'roles_permissoes',
  });
  return roles_permissoes;
};