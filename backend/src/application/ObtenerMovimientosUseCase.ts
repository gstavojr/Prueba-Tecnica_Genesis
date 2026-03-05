import { MovimientoPublic } from "@domain/entities/Movimiento";
import { NotFoundError } from "@domain/exceptions/Exception";
import { IMovimientoRepository } from "@domain/repositories/IMovimientoRepository";

interface ObtenerMovimientosInput {
  cuenta_id: number;
}

interface ObtenerMovimientosOutput {
  cuenta_id:   number;
  total:       number;
  movimientos: MovimientoPublic[];
}

export class ObtenerMovimientosUseCase {
  constructor(
    private movimientoRepository: IMovimientoRepository
  ) {}

  async execute(input: ObtenerMovimientosInput): Promise<ObtenerMovimientosOutput> {

    const movimientos = await this.movimientoRepository.findByCuenta(input.cuenta_id);

    if (!movimientos || movimientos.length === 0) {
      throw new NotFoundError(`No se encontraron movimientos para la cuenta ${input.cuenta_id}`);
    }

    return {
      cuenta_id:   input.cuenta_id,
      total:       movimientos.length,
      movimientos,
    };
  }
}