import { Box, Typography } from '@mui/material';
import React from 'react';

const CartItemDesc = ({ title, price, size }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
    <Typography>{title}</Typography>
    <Typography>
      {price}
      $
    </Typography>
    <Typography>{size}</Typography>
  </Box>
);

export default CartItemDesc;
