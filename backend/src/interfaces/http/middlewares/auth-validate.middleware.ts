import { Request, Response, NextFunction } from 'express'
import { ZodType } from 'zod'

export const validateRequest = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message
      }));
      res.status(400).json({ message: 'Datos Invalidos', errors });
      return;
    }
    req.body = result.data;
    next();
  }
}