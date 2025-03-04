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

  return Usuarios;
};




// {
//   "nome": "joao",
//   "email": "joao@teste.com",
//   "senha": "123456"
// }