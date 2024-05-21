import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
    text:{
      primary:"#333333",
      secondary:"#999999",
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

export default theme;
