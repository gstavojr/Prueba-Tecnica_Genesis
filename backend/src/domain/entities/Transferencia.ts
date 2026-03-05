export interface Transferencia {
  transferencia_id?:       number;
  cuenta_origen_id:        number;
  cuenta_destino_id:       number;
  monto:                   number;
  descripcion?:            string | null;
  estado_transferencia_id: number;
  fecha_creacion?:         Date;
  fecha_modificacion?:     Date;
}

export interface TransferenciaPublic {
  transferencia_id:        number;
  cuenta_origen_id:        number;
  cuenta_destino_id:       number;
  monto:                   number;
  descripcion:             string | null;
  estado_transferencia_id: number;
  estado:                  string;  
  fecha_creacion:          Date;
}

export interface CreateTransferenciaDTO {
  cuenta_origen_id:  number;
  cuenta_destino_id: number;
  monto:             number;
  descripcion?:      string;
}