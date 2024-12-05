import React from 'react';
import Icon1 from '../assets/images/icon-1-min.png';
import Icon5 from '../assets/images/icon-5-min.png';
import Icon3 from '../assets/images/icon-3-min.png';

import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Las imágenes y los datos de los servicios
const services = [
  {
    image: Icon1,
    title: '¿Qué son Polímeros?',
    caption: 'Conoce más sobre los plásticos',
    content:
      'Descubre qué son los polímeros y cómo impactan nuestra vida diaria. 🌍💡 ¡Explora su magia y los desafíos que enfrentan!',
  },
  {
    image: Icon5,
    title: '¿Cuál es su problemática?',
    caption: 'Conoce su impacto',
    content:
      'Conoce los desafíos ambientales de los polímeros y cómo están transformando el mundo. ♻️🌱 ¡Descúbrelo aquí!',
  },
  {
    image: Icon3,
    title: 'Certifica tu conocimiento',
    caption: 'Certifícate y toma acciones',
    content:
      'Demuestra lo que sabes y obtén tu certificación en el manejo de polímeros. 🎓✅ ¡Empieza ahora!',
  },
];

const CardsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', paddingTop: '25px', paddingBottom: '25px', width: '100%' }}>
      <div className="container">
        <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
          {services.map((service, index) => (
            <Grid xs={12} sm={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: 'cover',
                    marginTop: '20px',
                  }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                    {service.caption}
                  </Typography>
                  <Typography variant="body2">{service.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default CardsSection;
