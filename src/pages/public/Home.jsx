import React from "react";
import Slider from "../../components/Slider";
import { Box } from '@mui/material';
import CardsSection from "../../components/CardsSection";
import CardActionSection from "../../components/CardActionSection";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <Slider/>
      <CardsSection/>
      <CardActionSection/>
    </Box>
  );
};

export default Home;
