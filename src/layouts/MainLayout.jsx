import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'; // Importa el Footer

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleMenuClick = () => {
    setOpen(!open); // Lógica para abrir/cerrar el Sidebar si es necesario.
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header onMenuClick={handleMenuClick} />

      {/* Contenedor principal con Sidebar */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* <Sidebar /> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: (theme) => theme.palette.background.default,
            padding: 3,
            minHeight: 'calc(100vh - 64px)', // Ajusta para el Header
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;