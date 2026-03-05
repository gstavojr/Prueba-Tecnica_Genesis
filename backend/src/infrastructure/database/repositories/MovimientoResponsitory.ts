import { Movimiento, MovimientoPublic } from '@domain/entities/Movimiento';
import { IMovimientoRepository } from '@domain/repositories/IMovimientoRepository';
import { prisma } from '../prismaClient';

export class MovimientoRepository implements IMovimientoRepository {
  async create(movimiento: Movimiento): Promise<MovimientoPublic> {
    const row = await prisma.movimiento.create({
      data: {
        cuenta_id         : movimiento.cuenta_id,
        tipo_movimiento_id: movimiento.tipo_movimiento_id,
        transferencia_id  : movimiento.transferencia_id ?? null,
        monto             : movimiento.monto,
        saldo_anterior    : movimiento.saldo_anterior,
        saldo_nuevo       : movimiento.saldo_nuevo,
        descripcion       : movimiento.descripcion ?? null
      },
      include: { tipo_movimiento: true }
    });
    return {
      movimiento_id     : row.movimiento_id,
      cuenta_id         : row.cuenta_id,
      tipo_movimiento_id: row.tipo_movimiento_id,
      tipo_movimiento   : row.tipo_movimiento.nombre,
      transferencia_id  : row.transferencia_id,
      monto             : Number(row.monto),
      saldo_anterior    : Number(row.saldo_anterior),
      saldo_nuevo       : Number(row.saldo_nuevo),
      descripcion       : row.descripcion,
      fecha_creacion    : row.fecha_creacion!
    };
  }
  async findByCuenta(cuentaId: number): Promise<MovimientoPublic[]> {
    const rows = await prisma.movimiento.findMany({
      where: { cuenta_id: cuentaId },
      include: { tipo_movimiento: true },
      orderBy: { fecha_creacion: 'desc' }
    });

    return rows.map((row) => ({
      movimiento_id: row.movimiento_id,
      cuenta_id: row.cuenta_id,
      tipo_movimiento_id: row.tipo_movimiento_id,
      tipo_movimiento: row.tipo_movimiento.nombre,
      transferencia_id: row.transferencia_id,
      monto: Number(row.monto),
      saldo_anterior: Number(row.saldo_anterior),
      saldo_nuevo: Number(row.saldo_nuevo),
      descripcion: row.descripcion,
      fecha_creacion: row.fecha_creacion!
    }));
  }
  async fidnByNoCuenta(numeroCuenta: string): Promise<MovimientoPublic[]> {
    const rows = await prisma.movimiento.findMany({
      where: { cuenta: { numero_cuenta: numeroCuenta } },
      include: { tipo_movimiento: true },
      orderBy: { fecha_creacion: 'desc' }
    });

    return rows.map((row) => ({
      movimiento_id: row.movimiento_id,
      cuenta_id: row.cuenta_id,
      tipo_movimiento_id: row.tipo_movimiento_id,
      tipo_movimiento: row.tipo_movimiento.nombre,
      transferencia_id: row.transferencia_id,
      monto: Number(row.monto),
      saldo_anterior: Number(row.saldo_anterior),
      saldo_nuevo: Number(row.saldo_nuevo),
      descripcion: row.descripcion,
      fecha_creacion: row.fecha_creacion!
    }));
  }
  async findByTransferencia(transferenciaId: number): Promise<MovimientoPublic[]> {
    const rows = await prisma.movimiento.findMany({
      where: { transferencia_id: transferenciaId },
      include: { tipo_movimiento: true },
      orderBy: { fecha_creacion: 'asc' }
    });

    return rows.map((row) => ({
      movimiento_id: row.movimiento_id,
      cuenta_id: row.cuenta_id,
      tipo_movimiento_id: row.tipo_movimiento_id,
      tipo_movimiento: row.tipo_movimiento.nombre,
      transferencia_id: row.transferencia_id,
      monto: Number(row.monto),
      saldo_anterior: Number(row.saldo_anterior),
      saldo_nuevo: Number(row.saldo_nuevo),
      descripcion: row.descripcion,
      fecha_creacion: row.fecha_creacion!
    }));
  }
}
