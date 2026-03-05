import {
  CreateTransferenciaDTO,
  TransferenciaPublic
} from '@domain/entities/Transferencia';
import { ITransferenciaRepository } from '@domain/repositories/ITransferenciaRepository';
import { prisma } from '../prismaClient';
import { BusinessRuleError } from '@domain/exceptions/Exception';

const estadosTransferencia = {
  pendiente: 1,
  completado: 2
};

const tipoMovimiento = {
  debito: 1,
  credito: 2
};

export class TransferenciaRepository implements ITransferenciaRepository {
  async create(dto: CreateTransferenciaDTO): Promise<TransferenciaPublic> {
    const resultado = await prisma.$transaction(async (tx) => {
      const origen = await tx.cuenta.findUnique({
        where: { cuenta_id: dto.cuenta_origen_id }
      });
      const destino = await tx.cuenta.findUnique({
        where: { cuenta_id: dto.cuenta_destino_id }
      });

      if (!origen || !destino) {
        throw new BusinessRuleError('Cuenta de origen o destino no encontrada');
      }

      if (Number(origen.saldo) < Number(dto.monto)) {
        throw new BusinessRuleError('Saldo insuficiente en la cuenta de origen');
      }

      const transferenciaPendiente = await tx.transferencia.create({
        data: {
          cuenta_origen_id: dto.cuenta_origen_id,
          cuenta_destino_id: dto.cuenta_destino_id,
          monto: dto.monto,
          descripcion: dto.descripcion,
          estado_transferencia_id: estadosTransferencia.pendiente
        }
      });

      const nuevoSaldoOrigen = Number(origen.saldo) - Number(dto.monto);
      const nuevoSaldoDestino = Number(destino.saldo) + Number(dto.monto);

      await tx.movimiento.create({
        data: {
          cuenta_id: dto.cuenta_origen_id,
          tipo_movimiento_id: tipoMovimiento.debito,
          monto: dto.monto,
          descripcion: `Transferencia a cuenta ${dto.cuenta_destino_id}`,
          transferencia_id: transferenciaPendiente.transferencia_id,
          saldo_anterior: Number(origen.saldo),
          saldo_nuevo: nuevoSaldoOrigen
        }
      });

      await tx.movimiento.create({
        data: {
          cuenta_id: dto.cuenta_destino_id,
          tipo_movimiento_id: tipoMovimiento.credito,
          monto: dto.monto,
          descripcion: `Transferencia desde cuenta ${dto.cuenta_origen_id}`,
          transferencia_id: transferenciaPendiente.transferencia_id,
          saldo_anterior: Number(destino.saldo),
          saldo_nuevo: nuevoSaldoDestino
        }
      });

      await tx.cuenta.update({
        where: { cuenta_id: dto.cuenta_origen_id },
        data: { saldo: nuevoSaldoOrigen }
      });
      await tx.cuenta.update({
        where: { cuenta_id: dto.cuenta_destino_id },
        data: { saldo: nuevoSaldoDestino }
      });

      const transferenciaCompletada = await tx.transferencia.update({
        where: { transferencia_id: transferenciaPendiente.transferencia_id },
        data: { estado_transferencia_id: estadosTransferencia.completado },
        include: { estado_transferencia: true }
      });

      return transferenciaCompletada;
    });

    return {
      transferencia_id: resultado.transferencia_id!,
      cuenta_origen_id: resultado.cuenta_origen_id,
      cuenta_destino_id: resultado.cuenta_destino_id,
      monto: Number(resultado.monto),
      descripcion: resultado.descripcion,
      estado_transferencia_id: resultado.estado_transferencia_id,
      estado: resultado.estado_transferencia.nombre,
      fecha_creacion: resultado.fecha_creacion!
    }
  }
  async findById(id: number): Promise<TransferenciaPublic | null> {
    const row = await prisma.transferencia.findUnique({
      where: { transferencia_id: id },
      include: { estado_transferencia: true }
    });
    if (!row) return null;
    return {
      transferencia_id: row.transferencia_id!,
      cuenta_origen_id: row.cuenta_origen_id,
      cuenta_destino_id: row.cuenta_destino_id,
      monto: Number(row.monto),
      descripcion: row.descripcion,
      estado_transferencia_id: row.estado_transferencia_id,
      estado: row.estado_transferencia.nombre,
      fecha_creacion: row.fecha_creacion!
    }
  }
  async findByCuenta(cuentaId: number): Promise<TransferenciaPublic[]> {
    const rows = await prisma.transferencia.findMany({
      where: {
        OR: [
          { cuenta_origen_id: cuentaId },
          { cuenta_destino_id: cuentaId}
        ]
      },
      include: { estado_transferencia: true },
      orderBy: { fecha_creacion: 'desc' }
    })

    return rows.map(row => ({
      transferencia_id: row.transferencia_id!,
      cuenta_origen_id: row.cuenta_origen_id,
      cuenta_destino_id: row.cuenta_destino_id,
      monto: Number(row.monto),
      descripcion: row.descripcion,
      estado_transferencia_id: row.estado_transferencia_id,
      estado: row.estado_transferencia.nombre,
      fecha_creacion: row.fecha_creacion!
    }));
  }
}
