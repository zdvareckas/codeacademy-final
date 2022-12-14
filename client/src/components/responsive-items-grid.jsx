import React from 'react';
import { Box } from '@mui/material';

const ResponsiveItemsGrid = ({ filtersOpen, children }) => (
  <Box
    sx={{
      display: 'grid',
      gap: 3,
      placeContent: 'start',
      gridTemplateColumns: {
        xl: `${filtersOpen ? 'repeat(3, 475px)' : 'repeat(3, 550px)'}`,
        lg: `${filtersOpen ? 'repeat(2, 400px)' : 'repeat(3, 400px)'}`,
        md: 'repeat(2, 440px)',
        sm: 'repeat(2, 400px)',
        xs: 'repeat(1, 450px)',
      },
      transition: 'ease-in',
      mt: 5,
      p: 2,
    }}
  >
    {children}
  </Box>
);

export default ResponsiveItemsGrid;
