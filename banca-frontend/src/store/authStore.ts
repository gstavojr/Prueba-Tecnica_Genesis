import { api } from '@/api/axios';
import { create } from 'zustand';

interface User {
  usuario_id: number;
  nombre: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, contrasena: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, contrasena) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/auth/login', { email, contrasena });
      localStorage.setItem('access_token', data.token.accessToken);
      localStorage.setItem('refresh_token', data.token.refreshToken);
      set({ user: data.user, loading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || 'Error al iniciar sesión',
        loading: false
      });
    }
  },

  logout: () => {
    localStorage.clear();
    set({ user: null });
  }
}));
