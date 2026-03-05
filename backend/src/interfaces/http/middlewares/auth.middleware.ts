import { JwtService } from '@infrastructure/auth/JwtService';
import { Request, Response, NextFunction } from 'express';

const jwtService = new JwtService();


declare global {  namespace Express {
    interface Request {
      user?: {
        userId: number
        email: string
      }
    }
  }
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Token no proporcionado' })
      return
    }

    const token = authHeader.split(' ')[1]
    const payload = jwtService.verifyAccessToken(token)
    req.user = payload
    next()
  } catch {
    res.status(401).json({ message: 'Token inválido o expirado' })
  }
}

export const roleMiddleware = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(403).json({ message: 'Acceso denegado' })
      return
    }
    next()
  }
}