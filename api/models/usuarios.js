"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('usuarios', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Usuarios.associate = function(models) {
    Usuarios.hasMany(models.usuarios_roles, {
      foreignKey: 'usuario_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    Usuarios.hasMany(models.usuarios_permissoes, {
      foreignKey: 'usuario_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  return Usuarios;
};




// {
//   "nome": "joao",
//   "email": "joao@teste.com",
//   "senha": "123456"
// }