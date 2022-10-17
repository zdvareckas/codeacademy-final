import { Box } from '@mui/material';
import React from 'react';

const ResponsiveItemsGrid = ({ filtersOpen, children }) => (
  <Box
    sx={{
      display: 'grid',
      gap: 3,
      placeContent: 'center',
      gridTemplateColumns: {
        xl: `${filtersOpen ? 'repeat(3, 350px)' : 'repeat(4, 400px)'}`,
        lg: 'repeat(3, 350px)',
        md: `${filtersOpen ? 'repeat(2, 350px)' : 'repeat(2, 450px)'}`,
        sm: 'repeat(2, 400px)',
        xs: 'repeat(1, 400px)',
      },
      transition: 'ease-in',
      ml: {
        md: `${filtersOpen ? '300px' : '0px'}`,
      },
      p: 2,
    }}
  >
    {children}
  </Box>
);

export default ResponsiveItemsGrid;
