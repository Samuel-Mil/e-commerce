import { Request, Response } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
  // CREATE
  async create(req: Request, res: Response) {
    try {
      const { name, email, passwordHash, phone } = req.body;

      const user = await userService.create({
        name,
        email,
        passwordHash,
        phone,
      });

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao criar usuário",
        error: error.message,
      });
    }
  }

  // READ - listar todos
  async findAll(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      return res.json(users);
    } catch (error: any) {
      return res.status(500).json({
        message: "Erro ao listar usuários",
      });
    }
  }

  // READ - buscar por ID
  async findById(req: Request, res: Response) {
    try {
      const userId = BigInt(req.params.id);

      const user = await userService.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({
        message: "ID inválido",
      });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    try {
      const userId = BigInt(req.params.id);
      const { name, phone, status } = req.body;

      const user = await userService.update(userId, {
        name,
        phone,
        status,
      });

      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao atualizar usuário",
        error: error.message,
      });
    }
  }

  // SOFT DELETE
  async deactivate(req: Request, res: Response) {
    try {
      const userId = BigInt(req.params.id);

      await userService.deactivate(userId);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao desativar usuário",
      });
    }
  }

  // DELETE REAL (use com cuidado)
  async delete(req: Request, res: Response) {
    try {
      const userId = BigInt(req.params.id);

      await userService.delete(userId);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({
        message: "Erro ao deletar usuário",
      });
    }
  }
}
