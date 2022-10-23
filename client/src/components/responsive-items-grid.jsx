import { Box } from '@mui/material';
import React from 'react';

const ResponsiveItemsGrid = ({ filtersOpen, children }) => (
  <Box
    sx={{
      display: 'grid',
      gap: 3,
      placeContent: 'center',
      gridTemplateColumns: {
        xl: `${filtersOpen ? 'repeat(3, 475px)' : 'repeat(3, 550px)'}`,
        lg: `${filtersOpen ? 'repeat(2, 400px)' : 'repeat(3, 400px)'}`,
        md: 'repeat(2, 450px)',
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
