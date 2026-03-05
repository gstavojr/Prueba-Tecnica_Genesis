import { Token } from '../entities/Token'

export interface ITokenRepository {
  saveToke(userId: number, token: string, expiresIn: Date): Promise<void>;
  findByToken(token: string): Promise<Token | null>;
  revokeToken(token: string): Promise<void>;
}