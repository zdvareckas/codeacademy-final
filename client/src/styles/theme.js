import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#e8e6e6',
    },
    primary: {
      main: '#0D1B2A',
    },
    secondary: {
      main: '#DF2A39',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
