import jwt from 'jsonwebtoken'
import { TokenPair } from '../../domain/entities/Token';

interface JwtPayload {
  userId: number;
  email: string;
}

export class JwtService {
  private readonly accessSecret = process.env.JWT_ACCESS_SECRET!;
  private readonly refreshSecret = process.env.JWT_REFRESH_SECRET!;
  private readonly accessExpires = process.env.JWT_ACCESS_EXPIRES || '15m';
  private readonly refreshExpires = process.env.JWT_REFRESH_EXPIRES || '7d';



  generateTokens(payload: JwtPayload): TokenPair {
    const accessToken = jwt.sign(payload, this.accessSecret, { expiresIn: this.accessExpires as any });
    const refreshToken = jwt.sign(payload, this.refreshSecret, { expiresIn: this.refreshExpires as any });
    return { accessToken, refreshToken };
  }

  verifyAccessToken(token: string): JwtPayload {
    return jwt.verify(token, this.accessSecret) as JwtPayload;
  }

  verifyRefreshToken(token: string): JwtPayload {
    return jwt.verify(token, this.refreshSecret) as JwtPayload;
  }

}