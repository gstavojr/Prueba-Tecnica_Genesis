import { Token } from "@domain/entities/Token";
import { ITokenRepository } from "@domain/repositories/ITokenRepository";
import { prisma } from "../prismaClient";

export class TokenRespository implements ITokenRepository {
  async saveToke(userId: number, token: string, expiresIn: Date): Promise<void> {
    await prisma.token.create({
      data: {
        usuario_id: userId,
        token,
        expira_en: expiresIn
      }
    });
  }
  async findByToken(token: string): Promise<Token | null> {
    const row = await prisma.token.findUnique({ where: { token } });
    if (!row) return null;
    return {
      token: row.token,
      usuario_id: row.usuario_id,
      expira_en: row.expira_en,
      revocado: row.revocado,
      fecha_creacion: row.fecha_creacion,
    }
  }
  async revokeToken(token: string): Promise<void> {
    await prisma.token.update({
      where: { token },
      data: { revocado: true }
    });
  }

}