import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

// Valida req.body (POST / PUT)
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
  };
};

// Valida req.params (GET con IDs en la URL)
// Los params llegan como string, los convierte a number antes de validar
export const validateParams = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Convertir strings numéricas a number para que Zod las valide correctamente
    const parsed = Object.fromEntries(
      Object.entries(req.params).map(([key, val]) => [
        key,
        isNaN(Number(val)) ? val : Number(val)
      ])
    );

    const result = schema.safeParse(parsed);

    if (!result.success) {
      const errors = result.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message
      }));
      res.status(400).json({ message: 'Parámetros inválidos', errors });
      return;
    }
    next();
  };
};
