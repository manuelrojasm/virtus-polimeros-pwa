import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header";
// import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"; // Importa el Footer
import Slider from "../components/Slider";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleMenuClick = () => {
    setOpen(!open); // Lógica para abrir/cerrar el Sidebar si es necesario.
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header onMenuClick={handleMenuClick} />
      {/* Contenedor principal con Sidebar */}
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
