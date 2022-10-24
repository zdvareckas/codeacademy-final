import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const MainLayout = () => (
  <Box sx={{
    mt: 8,
  }}
  >
    <Navbar />
    <Outlet />
    <Footer />
  </Box>
);

export default MainLayout;
