import { createTheme } from '@mui/material/styles';

// paleta de colores personalizada
const theme = createTheme({
  palette: {
    primary: {
      main: '#113253', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#aabd67', 
      contrastText: '#000000', 
    },
    tertiary: {
        main: '#7c9270', 
        contrastText: '#000000', 
    },
    dark: {
        main: '#382817',
        paper: '#fff', 
    },
    background: {
      default: '#fff', 
      paper: '#aabd67', 
    },
    text: {
      primary: '#000', // Color del texto principal
      secondary: '#666666', // Color del texto secundario
    },
    error: {
      main: '#D32F2F', // Rojo para errores
    },
    warning: {
      main: '#ECB338', // Naranja para advertencias
    },
    info: {
      main: '#0288D1', // Azul para información
    },
    success: {
      main: '#2E7D32', // Verde para éxito
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Evita que los textos de los botones estén en mayúsculas
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordes redondeados en los botones
          padding: '8px 16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#6495ED',
        },
      },
    },
  },
});

export default theme;