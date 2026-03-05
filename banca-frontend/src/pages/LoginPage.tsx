import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Box, Button, TextField, Typography,
  CircularProgress, Alert, Paper, InputAdornment, IconButton,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const loginSchema = z.object({
  email:     z.string().email('Email inválido'),
  contrasena: z.string().min(1, 'Contraseña requerida'),
});
type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate  = useNavigate();
  const { login, loading, error, user } = useAuthStore();
  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user]);

  const onSubmit = async (data: LoginForm) => {
    await login(data.email, data.contrasena);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f1923 0%, #1a2f45 50%, #0f1923 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Georgia", serif',
    }}>
      {/* Background decoration */}
      <Box sx={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(41, 182, 246, 0.04)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(41, 182, 246, 0.06)', pointerEvents: 'none' }} />

      <Paper elevation={0} sx={{
        width: '100%', maxWidth: 420,
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 4, p: 5,
        mx: 2,
      }}>
        {/* Logo */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{
            width: 60, height: 60, borderRadius: 3, mx: 'auto', mb: 2,
            background: 'linear-gradient(135deg, #29b6f6, #0288d1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(41,182,246,0.3)',
          }}>
            <AccountBalanceIcon sx={{ color: '#fff', fontSize: 28 }} />
          </Box>
          <Typography sx={{ color: '#fff', fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
            Banco Virtual
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, mt: 0.5 }}>
            Ingresa a tu cuenta
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2, fontSize: 13 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            {...register('email')}
            label="Correo electrónico"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={fieldStyle}
          />

          <TextField
            {...register('contrasena')}
            label="Contraseña"
            type={showPass ? 'text' : 'password'}
            fullWidth
            error={!!errors.contrasena}
            helperText={errors.contrasena?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 20 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)} edge="end" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                    {showPass ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={fieldStyle}
          />

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              mt: 1, py: 1.6, borderRadius: 2, fontSize: 15, fontWeight: 700,
              background: 'linear-gradient(135deg, #29b6f6, #0288d1)',
              color: '#fff', textTransform: 'none', letterSpacing: 0.3,
              boxShadow: '0 4px 16px rgba(41,182,246,0.3)',
              '&:hover': { background: 'linear-gradient(135deg, #4fc3f7, #039be5)', boxShadow: '0 6px 20px rgba(41,182,246,0.4)' },
              '&:disabled': { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)' },
            }}
          >
            {loading ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : 'Iniciar sesión'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

const fieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(41,182,246,0.4)' },
    '&.Mui-focused fieldset': { borderColor: '#29b6f6' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.4)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#29b6f6' },
  '& .MuiFormHelperText-root': { color: '#f48fb1' },
};