import { EstadoCuenta } from '@domain/entities/Cuenta';
import { IEstadoCuentaRepository } from '@domain/repositories/IEstadoCuentaRepository';
import { prisma } from '../prismaClient';

export class EstadoCuentaRepository implements IEstadoCuentaRepository {
  async getByUsuario(usuarioId: number): Promise<EstadoCuenta[]> {
    const cuentas = await prisma.cuenta.findMany({
      where: { usuario_id: usuarioId },
      include: {
        tipo_cuenta: true,
        movimiento: {
          include: { tipo_movimiento: true },
          orderBy: { fecha_creacion: 'desc' }
        }
      }
    });

    return cuentas.map((c) => ({
      cuenta_id: c.cuenta_id,
      numero_cuenta: c.numero_cuenta,
      tipo_cuenta: c.tipo_cuenta.nombre,
      saldo_actual: Number(c.saldo),
      movimientos: c.movimiento.map((m) => ({
        movimiento_id     : m.movimiento_id,
        cuenta_id         : m.cuenta_id,
        tipo_movimiento_id: m.tipo_movimiento_id,
        tipo_movimiento   : m.tipo_movimiento.nombre,
        transferencia_id  : m.transferencia_id,
        monto             : Number(m.monto),
        saldo_anterior    : Number(m.saldo_anterior),
        saldo_nuevo       : Number(m.saldo_nuevo),
        descripcion       : m.descripcion,
        fecha_creacion    : m.fecha_creacion!
      }))
    }));
  }
  async getByCuenta(cuentaId: number): Promise<EstadoCuenta | null> {
    const c = await prisma.cuenta.findUnique({
      where: { cuenta_id: cuentaId },
      include: {
        tipo_cuenta: true,
        movimiento: {
          include: { tipo_movimiento: true },
          orderBy: { fecha_creacion: 'desc' }
        }
      }
    });
    if (!c) return null;

    return {
      cuenta_id: c.cuenta_id,
      numero_cuenta: c.numero_cuenta,
      tipo_cuenta: c.tipo_cuenta.nombre,
      saldo_actual: Number(c.saldo),
      movimientos: c.movimiento.map((m) => ({
        movimiento_id     : m.movimiento_id,
        cuenta_id         : m.cuenta_id,
        tipo_movimiento_id: m.tipo_movimiento_id,
        tipo_movimiento   : m.tipo_movimiento.nombre,
        transferencia_id  : m.transferencia_id,
        monto             : Number(m.monto),
        saldo_anterior    : Number(m.saldo_anterior),
        saldo_nuevo       : Number(m.saldo_nuevo),
        descripcion       : m.descripcion,
        fecha_creacion    : m.fecha_creacion!
      }))
    };
  }
}
