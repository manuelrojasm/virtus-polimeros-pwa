import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: 'dark.main',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} - Virtus Polímeros App. Todos los derechos reservados.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <IconButton href="https://github.com" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;