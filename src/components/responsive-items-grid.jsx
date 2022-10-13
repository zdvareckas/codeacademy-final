import { Box } from '@mui/material';
import React from 'react';

const ResponsiveItemsGrid = ({ filtersOpen, children }) => (
  <Box
    sx={{
      display: 'grid',
      placeContent: 'center',
      gap: 3,
      gridTemplateColumns: {
        xl: `${filtersOpen ? 'repeat(4, 350px)' : 'repeat(4, 400px)'}`,
        lg: `${filtersOpen ? 'repeat(2, 400px)' : 'repeat(3, 350px)'}`,
        md: `${filtersOpen ? 'repeat(2, 350px)' : 'repeat(3, 350px)'}`,
        sm: 'repeat(2, 400px)',
        xs: `${filtersOpen ? 'repeat(1, 400px)' : 'repeat(1, 400px)'}`,
      },
      transition: 'ease-in',
      ml: {
        md: `${filtersOpen ? '250px' : ''}`,
      },
      p: 2,
    }}
  >
    {children}
  </Box>
);

export default ResponsiveItemsGrid;
