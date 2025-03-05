'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios_permissoes extends Model {
    static associate(models) {
      usuarios_permissoes.belongsTo(models.usuarios, {
        foreignKey: 'usuario_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      usuarios_permissoes.belongsTo(models.permissoes, {
        foreignKey: 'permissao_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  usuarios_permissoes.init({
    usuario_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'usuarios_permissoes',
  });
  return usuarios_permissoes;
};