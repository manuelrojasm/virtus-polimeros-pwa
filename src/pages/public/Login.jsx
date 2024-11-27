import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button, Box, Typography } from '@mui/material';

const Login = () => {
  const { login } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
      <Button variant="contained" color="primary" onClick={login}>
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default Login;