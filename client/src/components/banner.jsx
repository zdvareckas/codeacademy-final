import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = ({ img, title }) => (
  <Box
    sx={{
      position: 'relative',
    }}
  >
    <Box
      component="img"
      src={img}
      sx={{
        height: 200,
        width: '100%',
        objectFit: 'cover',
        objectPosition: `${title === 'BIKES' ? 'top' : 'center'}`,
      }}
    />
    <Typography
      variant="h3"
      color="common.white"
      fontWeight="bold"
      sx={{ position: 'absolute', bottom: 90, left: 10 }}
    >
      {title}
    </Typography>

  </Box>
);

export default Banner;
