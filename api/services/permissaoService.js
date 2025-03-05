const database = require("../models");
const uuid = require("uuid");

class PermissaoService {
  async cadastrar({ nome, descricao }) {
    const permissao = await database.permissoes.findOne({
      where: {
        nome: nome,
      },
    });

    if (permissao) {
      throw new Error("Permissão já cadastrada");
    }

    try {
      const newPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: nome,
        descricao: descricao,
      });

      return newPermissao;
    } catch (error) {
      throw new Error("Erro cadastrar permissão");
    }
  }

  async listar() {
    // Implement the logic to list all permissions
  }

  async buscar(id) {
    // Implement the logic to get a permission by id
  }

  async deletar(id) {
    // Implement the logic to delete a permission by id
  }

  async atualizar(id, { nome, descricao }) {
    // Implement the logic to update a permission by id
  }
}

module.exports = PermissaoService;
