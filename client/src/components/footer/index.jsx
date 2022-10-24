import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <Box sx={{
      display: `${(location.pathname === '/') ? 'none' : 'flex'}`,
      justifyContent: 'center',
      p: 2,
      backgroundColor: 'primary.main',
      color: 'common.white',
    }}
    >
      <Typography textAlign="center">
        © Whatever
      </Typography>

    </Box>
  );
};

export default Footer;
