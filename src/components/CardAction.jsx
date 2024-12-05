import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

const CardAction = ({ img, title, subtitle, description, nameButton }) => {
//   const navigate = useNavigate();

//   const handleRedirect = (path) => {
//     navigate(path);
//   };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${img})`,
        backgroundSize: "cover",
        padding: 4,
        borderRadius: 2,
        textAlign: "left",
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        sx={{ color: "#facc2e", marginBottom: 2, fontSize: "36px", fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: 2, color: '#fff9' }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          width: "90%",
          height: "4px",
          display: "inline-flex",
          backgroundColor: "#facc2e",
          margin: "0 auto",
          marginBottom: 2,
        }}
      />
      <Typography
        variant="body1"
        sx={{ marginBottom: 3, color: "white" }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        //   onClick={() => handleRedirect(actionUrl)
        sx={{
          backgroundColor: "#fec428",
          color: "#000",
          "&:hover": { backgroundColor: "#e4b021" },
        }}
      >
        {nameButton}
      </Button>
    </Box>
  );
};

export default CardAction;
