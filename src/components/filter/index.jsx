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
        p: 5,
        mt: 8,
        width: 300,
      },
    }}
  >
    asasd
  </Drawer>

);

export default Filter;
