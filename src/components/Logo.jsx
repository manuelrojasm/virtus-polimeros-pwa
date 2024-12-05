import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logoPoliETITC.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Logo = ({ display }) => {

  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate('/'); 
  };

  return (
    <>
      <Box sx={{ display: display || { xs: 'none', md: 'flex' }, mr: 1 }}>
        <img
          src={logo}
          alt={"logo PlasTIC"}
          loading="lazy"
          width={"80px"}
          height={"80px"}
          onClick={handleRedirectHome}
        />
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={handleRedirectHome}
        sx={{
          display: display || { xs: 'none', md: 'flex' },
          mr: 2,
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PlasTIC
      </Typography>
    </>
  );
};

export default Logo;
