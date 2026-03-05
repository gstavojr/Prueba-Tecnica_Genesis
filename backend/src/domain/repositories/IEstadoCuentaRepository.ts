import { EstadoCuenta } from "@domain/entities/Cuenta";

export interface IEstadoCuentaRepository {
  getByUsuario(usuarioId: number): Promise<EstadoCuenta[]>;
  getByCuenta(cuentaId: number): Promise<EstadoCuenta | null>;
}