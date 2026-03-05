import { CreateTransferenciaDTO, TransferenciaPublic } from "@domain/entities/Transferencia";

export interface ITransferenciaRepository {
  create(dto: CreateTransferenciaDTO): Promise<TransferenciaPublic>;
  findById(id: number): Promise<TransferenciaPublic | null>
  findByCuenta(cuentaId: number): Promise<TransferenciaPublic[]>;
}