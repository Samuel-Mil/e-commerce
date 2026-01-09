import { prisma } from "../../infra/db/prisma";

export interface CreateUserDTO {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
}

export interface UpdateUserDTO {
  name?: string;
  phone?: string;
  status?: "active" | "inactive";
}

export class UserService {
  // CREATE
  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        phone: data.phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        createdAt: true,
      },
    });
  }

  // READ - listar todos
  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // READ - buscar por ID
  async findById(userId: bigint) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // READ - buscar por email (útil pra auth)
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  // UPDATE
  async update(userId: bigint, data: UpdateUserDTO) {
    return prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  // DELETE (soft delete recomendado)
  async deactivate(userId: bigint) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        status: "inactive",
      },
    });
  }

  // DELETE REAL (use com cuidado)
  async delete(userId: bigint) {
    return prisma.user.delete({
      where: { id: userId },
    });
  }
}
