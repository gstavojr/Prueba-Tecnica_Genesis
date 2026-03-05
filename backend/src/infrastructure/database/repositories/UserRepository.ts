import { User, UserPublic } from "@domain/entities/User";
import { IUserRepository } from "@domain/repositories/IUserRespository";
import { prisma } from "../prismaClient";

export class UserRespository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const row = await prisma.usuario.findUnique({
      where: { email },
      select: {
        usuario_id: true,
        nombre: true,
        email: true,
        contrasena: true
      }
    });
    if (!row) return null;
    return {
      usuario_id: row.usuario_id,
      nombre: row.nombre,
      email: row.email,
      contrasena: row.contrasena,
    }
  }
  async findById(id: number): Promise<UserPublic | null> {
    const row = await prisma.usuario.findUnique({
      where: { usuario_id: id },
      select: {
        usuario_id: true,
        nombre: true,
        email: true
      }
    });
    if (!row) return null;
    return {
      usuario_id: row.usuario_id,
      nombre: row.nombre,
      email: row.email
    }
  }
  async create(user: User): Promise<UserPublic> {
    const row = await prisma.usuario.create({
      data: {
        nombre: user.nombre,
        email: user.email,
        contrasena: user.contrasena
      },
      select: {
        usuario_id: true,
        nombre: true,
        email: true
      }
    });

    return {
      usuario_id: row.usuario_id,
      nombre: row.nombre,
      email: row.email
    }
  }

}