export interface User {
  usuario_id?: number;
  nombre: string;
  email: string;
  contrasena: string;
  fecha_creacion?: Date;
  fecha_modificacion?: Date;
}


export interface UserPublic {
  usuario_id: number;
  nombre: string;
  email: string;
}