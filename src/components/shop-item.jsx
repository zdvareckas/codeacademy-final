import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';

const ShopItem = ({
  id, title, img, price,
}) => (
  <Paper
    key={id}
    sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <Box
      component="img"
      src={img}
      sx={{ objectFit: 'contain' }}
    />
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      px: 2,
    }}
    >
      <Typography
        fontWeight="bold"
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{price}</Typography>
    </Box>
    <Button variant="contained" fullWidth>Preview</Button>
  </Paper>
);

export default ShopItem;
