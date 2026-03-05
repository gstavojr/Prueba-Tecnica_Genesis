import { z } from 'zod';

// ─── Crear Transferencia ──────────────────────────────────────────────────────

export const crearTransferenciaSchema = z
  .object({
    cuenta_origen_id: z
      .number({ error: 'La cuenta origen es requerida' })
      .int('La cuenta origen debe ser un número entero')
      .positive('La cuenta origen debe ser un ID válido'),

    cuenta_destino_id: z
      .number({ error: 'La cuenta destino es requerida' })
      .int('La cuenta destino debe ser un número entero')
      .positive('La cuenta destino debe ser un ID válido'),

    monto: z
      .number({ error: 'El monto es requerido' })
      .positive('El monto debe ser mayor a cero')
      .max(100_000, 'El monto no puede exceder Q100,000 por transferencia')
      .multipleOf(0.01, 'El monto no puede tener más de 2 decimales'),

    descripcion: z
      .string()
      .max(255, 'La descripción no puede exceder 255 caracteres')
      .optional()
  })
  .refine((data) => data.cuenta_origen_id !== data.cuenta_destino_id, {
    message: 'La cuenta origen y destino no pueden ser la misma',
    path: ['cuenta_destino_id']
  });

// ─── Obtener Movimientos ──────────────────────────────────────────────────────

export const obtenerMovimientosSchema = z.object({
  cuenta_id: z
    .number({ error: 'El ID de cuenta es requerido' })
    .int('El ID de cuenta debe ser un número entero')
    .positive('El ID de cuenta debe ser un valor válido')
});

// ─── Obtener Estado de Cuenta por Cuenta ─────────────────────────────────────

export const obtenerEstadoCuentaSchema = z.object({
  cuenta_id: z
    .number({ error: 'El ID de cuenta es requerido' })
    .int('El ID de cuenta debe ser un número entero')
    .positive('El ID de cuenta debe ser un valor válido')
});

// ─── Obtener Estado de Cuentas por Usuario ────────────────────────────────────

export const obtenerEstadoCuentasPorUsuarioSchema = z.object({
  usuario_id: z
    .number({ error: 'El ID de usuario es requerido' })
    .int('El ID de usuario debe ser un número entero')
    .positive('El ID de usuario debe ser un valor válido')
});

// ─── Types inferidos (para usar en los controllers/use cases) ─────────────────

export type CrearTransferenciaInput = z.infer<typeof crearTransferenciaSchema>;
export type ObtenerMovimientosInput = z.infer<typeof obtenerMovimientosSchema>;
export type ObtenerEstadoCuentaInput = z.infer<typeof obtenerEstadoCuentaSchema>;
export type ObtenerEstadoCuentasPorUsuario = z.infer<
  typeof obtenerEstadoCuentasPorUsuarioSchema
>;
