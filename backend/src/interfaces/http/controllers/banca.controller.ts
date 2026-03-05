import { CrearTransferenciaUseCase } from '@application/CrearTransferenciaUseCase';
import {
  ObtenerEstadoCuentasPorUsuarioUseCase,
  ObtenerEstadoCuentaUseCase
} from '@application/ObtenerEstadoCuentasUseCase ';
import { ObtenerMovimientosUseCase } from '@application/ObtenerMovimientosUseCase';
import { Request, Response, NextFunction } from 'express';

export class BancaController {
  constructor(
    private obtenerMovimientosUseCase: ObtenerMovimientosUseCase,
    private crearTransferenciaUseCase: CrearTransferenciaUseCase,
    private obtenerEstadoCuentaUseCase: ObtenerEstadoCuentaUseCase,
    private obtenerEstadoCuentasPorUsuarioUseCase: ObtenerEstadoCuentasPorUsuarioUseCase
  ) {}

  // GET /cuentas/:cuenta_id/movimientos
  obtenerMovimientos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta_id = Number(req.params.cuenta_id);
      const result = await this.obtenerMovimientosUseCase.execute({ cuenta_id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // POST /transferencias
  crearTransferencia = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.crearTransferenciaUseCase.execute(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  // GET /cuentas/:cuenta_id/estado
  obtenerEstadoCuenta = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cuenta_id = Number(req.params.cuenta_id);
      const result = await this.obtenerEstadoCuentaUseCase.execute({ cuenta_id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // GET /usuarios/:usuario_id/cuentas
  obtenerEstadoCuentasPorUsuario = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const usuario_id = Number(req.params.usuario_id);
      const result = await this.obtenerEstadoCuentasPorUsuarioUseCase.execute({
        usuario_id
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
