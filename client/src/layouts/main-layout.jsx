import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => (
  <Box sx={{ paddingTop: 8 }}>
    <Navbar />
    <Outlet />
  </Box>
);

export default MainLayout;
