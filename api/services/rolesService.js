const database = require("../models");
const uuid = require("uuid");

class RolesService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });

    if (role) {
      throw new Error("Role já cadastrada");
    }

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return newRole;
    } catch (error) {
      throw new Error([
        "Erro ao cadastrar role",
        `\n${error.message}\n${error.stack}`,
      ]);
    }
  }

  async listar() {
    try {
      const roles = await database.roles.findAll();
      return roles;
    } catch (error) {
      throw new Error("Erro ao listar roles");
    }
  }

  async buscar(id) {
    try {
      const role = await database.roles.findOne({
        where: {
          id: id,
        },
      });

      if (!role) {
        throw new Error("Role não encontrada");
      }

      return role;
    } catch (error) {
      throw new Error("Erro ao buscar role");
    }
  }

  async deletar(id) {
    try {
      const role = await database.roles.findOne({
        where: {
          id: id,
        },
      });

      if (!role) {
        throw new Error("Role não encontrada");
      }

      await database.roles.destroy({
        where: {
          id: id,
        },
      });

      return { message: "Role deletada com sucesso" };
    } catch (error) {
      throw new Error("Erro ao deletar role");
    }
  }

  async editar(id, dto) {
    try {
      const role = await database.roles.findOne({
        where: {
          id: id,
        },
      });

      if (!role) {
        throw new Error("Role não encontrada");
      }

      role.nome = dto.nome;
      role.descricao = dto.descricao;

      await role.save();

      return role;
    } catch (error) {
      throw new Error("Erro ao editar role");
    }
  }
}

module.exports = RolesService;
