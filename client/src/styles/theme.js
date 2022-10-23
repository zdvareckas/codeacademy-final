import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
  },
  mixins: {
    navbar: {
      height: '64px',
    },
  },
});

export default theme;
