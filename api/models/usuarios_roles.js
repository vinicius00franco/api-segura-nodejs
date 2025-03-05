'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarios_roles.belongsTo(models.usuarios, {
        foreignKey: 'usuario_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      usuarios_roles.belongsTo(models.roles, {
        foreignKey: 'role_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  usuarios_roles.init({
    usuario_id: DataTypes.UUID,
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'usuarios_roles',
  });
  return usuarios_roles;
};