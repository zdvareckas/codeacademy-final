import React from 'react';
import { Box } from '@mui/material';

const Banner = () => (
  <Box
    component="img"
    src="https://assets.specialized.com/i/specialized/plp-banner_Bikes?$hybris-category-hero$"
    sx={{
      height: 200,
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'bottom',
    }}
  />
);

export default Banner;
