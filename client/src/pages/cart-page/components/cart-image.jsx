import { Box } from '@mui/material';
import React from 'react';

const CartImage = ({ image }) => (
  <Box
    component="img"
    src={image}
    sx={{
      height: 130,
      width: 200,
    }}
  />
);

export default CartImage;
