import React from 'react';
import {
  Drawer,

} from '@mui/material';

const Filter = ({ filtersOpen }) => (
  <Drawer
    open={filtersOpen}
    variant="persistent"
    elevation={0}
    PaperProps={{
      sx: {
        mt: 8,
        p: 4,
        width: 300,
      },
    }}
  >
    Filters
  </Drawer>

);

export default Filter;
