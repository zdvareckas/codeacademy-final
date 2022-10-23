import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './app';
import theme from './styles/theme';
import { AuthProvider } from './store/auth/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
