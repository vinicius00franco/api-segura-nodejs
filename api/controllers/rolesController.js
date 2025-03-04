const RolesService = require("../services/rolesService");
const rolesService = new RolesService();

class RolesController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await rolesService.cadastrar({ nome, descricao });

      res.status(201).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const roles = await rolesService.listar();
      res.status(200).json(roles);
    } catch (error) {
      res.status(400).send({
        message: [error.message, error.stack],
      });
    }
  }

  static async buscar(req, res) {
    const { id } = req.params;
    try {
      const role = await rolesService.buscar(id);
      res.status(200).json(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const message = await rolesService.deletar(id);
      res.status(200).send(message);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async editar(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    try {
      const role = await rolesService.editar(id, { nome, descricao });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RolesController;
