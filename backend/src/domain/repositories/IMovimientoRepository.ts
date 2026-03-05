import { Movimiento, MovimientoPublic } from "@domain/entities/Movimiento";

export interface IMovimientoRepository {

  create(movimiento: Movimiento): Promise<MovimientoPublic>;
  findByCuenta(cuentaId: number): Promise<MovimientoPublic[]>;
  fidnByNoCuenta(numeroCuenta: string): Promise<MovimientoPublic[]>;

  findByTransferencia(transferenciaId: number): Promise<MovimientoPublic[]>;

}