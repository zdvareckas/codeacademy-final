import { Box, Typography } from '@mui/material';
import React from 'react';

const CartItemDesc = ({ title, price, size }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="subtitle2">
      Price:
      {' '}
      {price}
      {' '}
      $
    </Typography>
    <Typography
      variant="subtitle2"
    >
      Size:
      {' '}
      {size}
    </Typography>
  </Box>
);

export default CartItemDesc;
