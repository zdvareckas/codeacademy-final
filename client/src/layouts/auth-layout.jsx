import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const AuthLayout = () => (
  <Box sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8,
  }}
  >
    <Navbar />
    <Outlet />
  </Box>
);

export default AuthLayout;
