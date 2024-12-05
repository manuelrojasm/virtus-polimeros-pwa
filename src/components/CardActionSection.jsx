import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Img1 from "../assets/images/img-1.min.jpg";
import Img28 from "../assets/images/img-31.min.jpeg";
import Img20 from "../assets/images/img-32.min.jpg";
import CardAction from "./CardAction";

const cards = [
  {
    img: Img28,
    title: "Parturient Pellque",
    subtitle: "Amet Dapibus Mollis",
    description:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.",
    nameButton: "name button",
    url: "/",
  },
  {
    img: Img20,
    title: "Parturient Pellque",
    subtitle: "Amet Dapibus Mollis",
    description:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.",
    nameButton: "name button",
    url: "/",
  },
];

const CardActionSection = () => {
  return (
    <Box
      id="content-section-3"
      sx={{
        backgroundImage: `url(${Img1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        paddingTop: 9,
        paddingBottom: 6.5,
      }}
    >
      <Box sx={{ margin: "0 auto", padding: "0 16px" }}>
        <Grid container spacing={10} sx={{display: 'flex', justifyContent: 'center'}}>
          {cards.map((card, index) => (
            <Grid xs={12} md={6} key={index}>
              <CardAction
                img={card.img}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                nameButton={card.nameButton}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CardActionSection;
