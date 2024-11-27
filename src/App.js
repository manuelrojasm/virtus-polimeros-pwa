import React from 'react';
import { CssBaseline } from '@mui/material';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;