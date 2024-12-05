import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1 from "../assets/images/slide1-min.jpeg";
import slide2 from "../assets/images/slide2-min.jpeg";
import slide3 from "../assets/images/slide3-min.jpeg";
import { Box, Typography, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      image: slide1,
      layers: [
        {
          text: "El futuro de nuestro",
          style: {
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            top: "20%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          text: "planeta",
          style: {
            fontSize: { xs: "2rem", md: "4rem" },
            color: "#fff",
            top: "25%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          text: "está en nuestras",
          style: {
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            top: "33%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          text: "manos",
          style: {
            fontSize: { xs: "2rem", md: "4rem" },
            color: "#fff",
            top: "37%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          button: "Más Información",
          style: {
            top: "50%",
            left: "10%",
            backgroundColor: "warning.main",
            color: "#000",
            Padding: "2.5vh",
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
      ],
    },
    {
      image: slide2,
      layers: [
        {
          text: "Nuestro planeta",
          style: {
            fontSize: { xs: "2rem", md: "4rem" },
            color: "#fff",
            top: "20%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          text: "nos necesita",
          style: {
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#fff",
            top: "30%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black",
          },
        },
        {
          button: "Más Información",
          style: {
            top: "40%",
            left: "10%",
            backgroundColor: "warning.main",
            color: "#000",
            Padding: "2.5vh",
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
      ],
    },
    {
      image: slide3,
      layers: [
        {
          text: "Menos basura,",
          style: {
            fontSize: { xs: "2rem", md: "5rem" },
            color: "#fff",
            top: "20%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black"
          },
        },
        {
          text: "más naturaleza",
          style: {
            fontSize: { xs: "2rem", md: "5rem" },
            color: "#fff",
            top: "30%",
            left: "10%",
            textShadow: "0.1em 0.1em 0.2em black"
          },
        },
      ],
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      style={{ width: "100%", height: "70vh" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {slide.layers.map((layer, idx) =>
              layer.button ? (
                <Button
                  key={idx}
                  variant="contained"
                  color="primary"
                  sx={{
                    position: "absolute",
                    ...layer.style,
                  }}
                >
                  {layer.button}
                </Button>
              ) : (
                <Typography
                  key={idx}
                  sx={{
                    position: "absolute",
                    ...layer.style,
                  }}
                >
                  {layer.text}
                </Typography>
              )
            )}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
