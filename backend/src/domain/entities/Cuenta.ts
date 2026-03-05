import { MovimientoPublic } from "./Movimiento";

export interface EstadoCuenta {
  cuenta_id?: number;
  numero_cuenta: string;
  tipo_cuenta: string;
  saldo_actual: number;
  movimientos: MovimientoPublic[];
}