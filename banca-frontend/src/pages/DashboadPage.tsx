import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Card, CardContent, Chip, Divider,
  Avatar, IconButton, Tooltip, CircularProgress, Alert,
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
  Collapse,
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useAuthStore } from '../store/authStore';
import { useBancaStore, type Cuenta } from '../store/bancaStore';

const fmt = (n: number) =>
  new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ', minimumFractionDigits: 2 }).format(n);

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString('es-GT', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

// ─── Fila de movimiento ───────────────────────────────────────────────────────
function MovimientoRow({ mov }: { mov: Cuenta['movimientos'][0] }) {
  const esCredito = mov.tipo_movimiento === 'Crédito';
  return (
    <TableRow sx={{ '&:hover': { background: 'rgba(41,182,246,0.04)' } }}>
      <TableCell sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, py: 1.5 }}>
        {fmtDate(mov.fecha_creacion)}
      </TableCell>
      <TableCell sx={{ py: 1.5 }}>
        <Chip
          icon={esCredito ? <TrendingUpIcon style={{ fontSize: 14 }} /> : <TrendingDownIcon style={{ fontSize: 14 }} />}
          label={mov.tipo_movimiento}
          size="small"
          sx={{
            fontSize: 11, fontWeight: 700,
            background: esCredito ? 'rgba(102,187,106,0.15)' : 'rgba(244,143,177,0.15)',
            color: esCredito ? '#66bb6a' : '#f48fb1',
            border: `1px solid ${esCredito ? 'rgba(102,187,106,0.3)' : 'rgba(244,143,177,0.3)'}`,
            '& .MuiChip-icon': { color: 'inherit' },
          }}
        />
      </TableCell>
      <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, py: 1.5 }}>
        {mov.descripcion || '—'}
      </TableCell>
      <TableCell align="right" sx={{ fontWeight: 700, fontSize: 14, py: 1.5, color: esCredito ? '#66bb6a' : '#f48fb1' }}>
        {esCredito ? '+' : '-'}{fmt(mov.monto)}
      </TableCell>
      <TableCell align="right" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, py: 1.5 }}>
        {fmt(mov.saldo_nuevo)}
      </TableCell>
    </TableRow>
  );
}

// ─── Tarjeta de cuenta ────────────────────────────────────────────────────────
function CuentaCard({ cuenta }: { cuenta: Cuenta }) {
  const [open, setOpen] = useState(false);
  const tieneMovs = cuenta.movimientos.length > 0;

  return (
    <Card sx={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 3, overflow: 'hidden',
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: 'rgba(41,182,246,0.2)' },
    }}>
      <CardContent sx={{ p: 3 }}>
        {/* Header cuenta */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{
              width: 42, height: 42, borderRadius: 2,
              background: 'linear-gradient(135deg, #29b6f6, #0288d1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(41,182,246,0.25)',
            }}>
              <AccountBalanceWalletIcon sx={{ color: '#fff', fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>
                {cuenta.tipo_cuenta}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontFamily: 'monospace' }}>
                {cuenta.numero_cuenta}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, mb: 0.3 }}>SALDO</Typography>
            <Typography sx={{ color: '#29b6f6', fontWeight: 800, fontSize: 22, letterSpacing: -0.5 }}>
              {fmt(cuenta.saldo_actual)}
            </Typography>
          </Box>
        </Box>

        {/* Toggle movimientos */}
        <Box
          onClick={() => tieneMovs && setOpen(!open)}
          sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            pt: 2, borderTop: '1px solid rgba(255,255,255,0.06)',
            cursor: tieneMovs ? 'pointer' : 'default',
            color: tieneMovs ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
            '&:hover': tieneMovs ? { color: '#29b6f6' } : {},
            transition: 'color 0.2s',
          }}
        >
          <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
            {tieneMovs ? `${cuenta.movimientos.length} movimiento(s)` : 'Sin movimientos'}
          </Typography>
          {tieneMovs && (open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />)}
        </Box>
      </CardContent>

      {/* Tabla de movimientos */}
      <Collapse in={open}>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
        <Box sx={{ overflowX: 'auto' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {['Fecha', 'Tipo', 'Descripción', 'Monto', 'Saldo nuevo'].map(h => (
                  <TableCell key={h} align={h === 'Monto' || h === 'Saldo nuevo' ? 'right' : 'left'}
                    sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700,
                          letterSpacing: 0.5, textTransform: 'uppercase',
                          borderColor: 'rgba(255,255,255,0.06)', py: 1.5, px: 2 }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cuenta.movimientos.map(m => (
                <MovimientoRow key={m.movimiento_id} mov={m} />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </Card>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { cuentas, fetchCuentas, loadingCuentas, error } = useBancaStore();

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    fetchCuentas(user.usuario_id);
  }, [user]);

  const totalSaldo = cuentas.reduce((s, c) => s + c.saldo_actual, 0);

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0f1923 0%, #1a2f45 60%, #0f1923 100%)',
      fontFamily: '"Georgia", serif',
    }}>
      {/* Navbar */}
      <Box sx={{
        px: { xs: 2, md: 5 }, py: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(15,25,35,0.8)', backdropFilter: 'blur(10px)',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <AccountBalanceIcon sx={{ color: '#29b6f6', fontSize: 24 }} />
          <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>Banco Virtual</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ width: 34, height: 34, background: 'linear-gradient(135deg,#29b6f6,#0288d1)', fontSize: 14, fontWeight: 700 }}>
            {user?.nombre?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, display: { xs: 'none', sm: 'block' } }}>
            {user?.nombre}
          </Typography>
          <Tooltip title="Cerrar sesión">
            <IconButton onClick={handleLogout} size="small" sx={{ color: 'rgba(255,255,255,0.4)', '&:hover': { color: '#f48fb1' } }}>
              <LogoutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, md: 4 }, py: 4 }}>

        {/* Resumen total */}
        <Box sx={{
          background: 'linear-gradient(135deg, rgba(41,182,246,0.12), rgba(2,136,209,0.06))',
          border: '1px solid rgba(41,182,246,0.15)',
          borderRadius: 3, p: 3, mb: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 2,
        }}>
          <Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
              Patrimonio total
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: 32, fontWeight: 800, letterSpacing: -1, mt: 0.5 }}>
              {fmt(totalSaldo)}
            </Typography>
          </Box>
          <Chip label={`${cuentas.length} cuenta(s) activa(s)`} size="small"
            sx={{ background: 'rgba(41,182,246,0.15)', color: '#29b6f6', border: '1px solid rgba(41,182,246,0.3)', fontWeight: 600 }} />
        </Box>

        {/* Cuentas */}
        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700,
          letterSpacing: 1.5, textTransform: 'uppercase', mb: 2 }}>
          Mis cuentas
        </Typography>

        {loadingCuentas && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress sx={{ color: '#29b6f6' }} />
          </Box>
        )}

        {error && <Alert severity="error" sx={{ borderRadius: 2, mb: 2 }}>{error}</Alert>}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {cuentas.map(c => <CuentaCard key={c.cuenta_id} cuenta={c} />)}
        </Box>

        {!loadingCuentas && cuentas.length === 0 && !error && (
          <Box sx={{ textAlign: 'center', py: 8, color: 'rgba(255,255,255,0.2)' }}>
            <AccountBalanceWalletIcon sx={{ fontSize: 48, mb: 1 }} />
            <Typography>No tienes cuentas registradas</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}