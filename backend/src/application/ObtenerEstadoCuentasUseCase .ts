import { EstadoCuenta } from "@domain/entities/Cuenta";
import { NotFoundError } from "@domain/exceptions/Exception";
import { IEstadoCuentaRepository } from "@domain/repositories/IEstadoCuentaRepository";


interface ObtenerPorUsuarioInput {
  usuario_id: number;
}

interface ObtenerPorUsuarioOutput {
  usuario_id: number;
  total:      number;
  cuentas:    EstadoCuenta[];
}


export class ObtenerEstadoCuentasPorUsuarioUseCase {
  constructor(
    private estadoCuentaRepository: IEstadoCuentaRepository
  ) {}

  async execute(input: ObtenerPorUsuarioInput): Promise<ObtenerPorUsuarioOutput> {

    const cuentas = await this.estadoCuentaRepository.getByUsuario(input.usuario_id);

    if (!cuentas || cuentas.length === 0) {
      throw new NotFoundError(`No se encontraron cuentas para el usuario ${input.usuario_id}`);
    }

    return {
      usuario_id: input.usuario_id,
      total:      cuentas.length,
      cuentas,
    };
  }

}

interface ObtenerPorCuentaInput {
  cuenta_id: number;
}

export class ObtenerEstadoCuentaUseCase {

  constructor(
    private estadoCuentaRepository: IEstadoCuentaRepository
  ) {}

  async execute(input: ObtenerPorCuentaInput): Promise<EstadoCuenta> {

    const estadoCuenta = await this.estadoCuentaRepository.getByCuenta(input.cuenta_id);

    if (!estadoCuenta) {
      throw new NotFoundError(`Cuenta ${input.cuenta_id} no encontrada`);
    }

    return estadoCuenta;
  }
}