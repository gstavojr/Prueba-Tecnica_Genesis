import { BusinessRuleError, ForbiddenError, NotFoundError, UnauthorizedError } from '@domain/exceptions/Exception';
import { NextFunction, Response, Request } from 'express';

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {


  if (error instanceof BusinessRuleError) {
    res.status(400).json({ message: error.message });
    return;
  }
  if (error instanceof NotFoundError) {
    res.status(404).json({ message: error.message });
    return;
  }
  if (error instanceof UnauthorizedError) {
    res.status(401).json({ message: error.message });
    return;
  }
  if (error instanceof ForbiddenError) {
    res.status(403).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: 'Error interno del servidor' });


}