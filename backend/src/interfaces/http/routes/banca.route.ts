import { Router } from 'express';

import {
  validateRequest,
  validateParams
} from '../middlewares/banca-validate.middleware';
import { container } from 'src/container';
import {
  crearTransferenciaSchema,
  obtenerEstadoCuentaSchema,
  obtenerEstadoCuentasPorUsuarioSchema,
  obtenerMovimientosSchema
} from '@interfaces/dtos/banca.dto';

const router = Router();
const ctrl = container.bancaController;

router.get(
  '/cuentas/:cuenta_id/movimientos',
  validateParams(obtenerMovimientosSchema),
  ctrl.obtenerMovimientos
);

router.post(
  '/transferencias',
  validateRequest(crearTransferenciaSchema),
  ctrl.crearTransferencia
);

router.get(
  '/cuentas/:cuenta_id/estado',
  validateParams(obtenerEstadoCuentaSchema),
  ctrl.obtenerEstadoCuenta
);

router.get(
  '/usuarios/:usuario_id/cuentas',
  validateParams(obtenerEstadoCuentasPorUsuarioSchema),
  ctrl.obtenerEstadoCuentasPorUsuario
);

export default router;
