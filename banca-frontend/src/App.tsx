import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboadPage'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:    { main: '#29b6f6' },
    background: { default: '#0f1923', paper: '#1a2f45' },
  },
  typography: { fontFamily: '"Georgia", serif' },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.06)', paddingLeft: 16, paddingRight: 16 },
      },
    },
  },
});

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('access_token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}


function App() {

  return (
   <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <PrivateRoute><DashboardPage /></PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
