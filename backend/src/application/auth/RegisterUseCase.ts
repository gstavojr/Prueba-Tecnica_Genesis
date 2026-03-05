import { TokenPair } from "@domain/entities/Token";
import { BusinessRuleError } from "@domain/exceptions/Exception";
import { ITokenRepository } from "@domain/repositories/ITokenRepository";
import { IUserRepository } from "@domain/repositories/IUserRespository";
import { JwtService } from "@infrastructure/auth/JwtService";
import bcrypt from 'bcrypt'


interface RegisterInput {
  nombre:    string
  email:     string
  contrasena: string
}

interface RegisterOutput {
  user:   { usuario_id: number; nombre: string; email: string }
  tokens: TokenPair
}


export class RegisterUseCase {
  constructor(
    private userRepository:  IUserRepository,
    private tokenRepository: ITokenRepository,
    private jwtService:      JwtService
  ) {}


  async execute(input: RegisterInput): Promise<RegisterOutput> {
     const existing = await this.userRepository.findByEmail(input.email)
    if (existing) {
      throw new BusinessRuleError('El email ya está registrado')
    }

    const contrasena = await bcrypt.hash(input.contrasena, 10)

    const newUser = await this.userRepository.create({
      nombre: input.nombre,
      email: input.email,
      contrasena
    });

    const tokens = this.jwtService.generateTokens({ userId: newUser.usuario_id!, email: newUser.email });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Expira en 7 días
    await this.tokenRepository.saveToke(newUser.usuario_id, tokens.refreshToken, expiresAt);

    return {
      user: {
        usuario_id: newUser.usuario_id!,
        nombre: newUser.nombre,
        email: newUser.email
      },
      tokens
    }

  }
}