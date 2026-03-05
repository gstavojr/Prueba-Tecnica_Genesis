export interface Movimiento {
  movimiento_id?:      number;
  cuenta_id:           number;
  tipo_movimiento_id:  number;
  transferencia_id?:   number | null;
  monto:               number;
  saldo_anterior:      number;
  saldo_nuevo:         number;
  descripcion?:        string | null;
  fecha_creacion?:     Date;
  fecha_modificacion?: Date;
}

export interface MovimientoPublic {
  movimiento_id:      number;
  cuenta_id:          number;
  tipo_movimiento_id: number;
  tipo_movimiento:    string;
  transferencia_id:   number | null;
  monto:              number;
  saldo_anterior:     number;
  saldo_nuevo:        number;
  descripcion:        string | null;
  fecha_creacion:     Date;
}