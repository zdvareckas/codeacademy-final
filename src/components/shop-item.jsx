import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ShopItem = ({
  id, title, images, price,
}) => {
  const navigate = useNavigate();

  return (
    <Paper
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#F3F0F3',
      }}
    >
      <Box
        component="img"
        src={images}
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
          variant="h5"
          color="grey.800"
        >
          {title}
        </Typography>
        <Typography variant="body1">{price}</Typography>
      </Box>
      <Button
        fullWidth
        sx={{ color: 'grey.700', fontWeight: 'bold' }}
        onClick={() => navigate(`/item/${id}`)}
      >
        Preview
      </Button>
    </Paper>
  );
};

export default ShopItem;
