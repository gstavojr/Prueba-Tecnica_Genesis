import { z } from 'zod';


export const registerSchema = z.object({
  nombre: z
    .string({ error: 'El nombre es requerido' })
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(150, 'El nombre no puede exceder 150 caracteres'),

  email: z
    .string({ error: 'El email es requerido' })
    .email('El email no tiene un formato válido'),

  contrasena: z
    .string({ error: 'La contraseña es requerida' })
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(100, 'La contraseña no puede exceder 100 caracteres')
})

export const loginSchema = z.object({
  email: z
    .string({ error: 'El email es requerido' })
    .email('El email no tiene un formato válido'),

  contrasena: z
    .string({ error: 'La contraseña es requerida' })
    .min(1, 'La contraseña es requerida')
})

export const refreshSchema = z.object({
  refreshToken: z
    .string({ error: 'El refresh token es requerido' })
    .min(1, 'El refresh token es requerido')
})
