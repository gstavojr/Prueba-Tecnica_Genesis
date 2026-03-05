import { TokenPair } from '@domain/entities/Token';
import { UnauthorizedError } from '@domain/exceptions/Exception';
import { ITokenRepository } from '@domain/repositories/ITokenRepository';
import { IUserRepository } from '@domain/repositories/IUserRespository';
import { JwtService } from '@infrastructure/auth/JwtService';
import bcryp from 'bcrypt';


interface LoginInput { 
  email: string;
  contrasena: string;
}

interface LoginOutput {
  user: { usuario_id: number; nombre: string; email: string };
  token: TokenPair
}


export class LoginUseCase {

  constructor(
    private userResponsitory: IUserRepository,
    private tokenResponsitory: ITokenRepository,
    private jwtService: JwtService
  ){}

  async execute(input: LoginInput): Promise<LoginOutput> {

    const user = await this.userResponsitory.findByEmail(input.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const isPasswordValid = await bcryp.compare(input.contrasena, user.contrasena);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const token = this.jwtService.generateTokens({ userId: user.usuario_id!, email: user.email });

    const expireAt = new Date();
    expireAt.setDate(expireAt.getDate() + 7); // Expira en 7 días
    await this.tokenResponsitory.saveToke(user.usuario_id!, token.refreshToken, expireAt);

    return {
      user: {
        usuario_id: user.usuario_id!,
        nombre: user.nombre,
        email: user.email
      },
      token
    }

  }



}