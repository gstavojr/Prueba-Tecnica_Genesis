import { api } from '@/api/axios';
import { create } from 'zustand';

export interface Movimiento {
  movimiento_id:   number;
  tipo_movimiento: string;
  monto:           number;
  saldo_anterior:  number;
  saldo_nuevo:     number;
  descripcion:     string | null;
  fecha_creacion:  string;
}

export interface Cuenta {
  cuenta_id:     number;
  numero_cuenta: string;
  tipo_cuenta:   string;
  saldo_actual:  number;
  movimientos:   Movimiento[];
}

interface BancaState {
  cuentas:        Cuenta[];
  loadingCuentas: boolean;
  error:          string | null;
  fetchCuentas:   (usuarioId: number) => Promise<void>;
}

export const useBancaStore = create<BancaState>((set) => ({
  cuentas:        [],
  loadingCuentas: false,
  error:          null,

  fetchCuentas: async (usuarioId) => {
    set({ loadingCuentas: true, error: null });
    try {
      const { data } = await api.get(`/banca/usuarios/${usuarioId}/cuentas`);
      set({ cuentas: data.cuentas, loadingCuentas: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Error al cargar cuentas', loadingCuentas: false });
    }
  }
  
}));