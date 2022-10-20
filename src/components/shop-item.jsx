import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ShopItem = ({
  id, title, images, price, itemType,
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
        src={images[0]}
        sx={{ objectFit: 'contain' }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 2,
      }}
      >
        <Typography
          variant="h6"
          color="grey.800"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="grey.400"
        >
          {price}
        </Typography>
      </Box>
      <Button
        fullWidth
        sx={{ color: 'grey.700', fontWeight: 'bold' }}
        onClick={() => navigate(`/${itemType}/${id}`)}
      >
        Preview
      </Button>
    </Paper>
  );
};

export default ShopItem;
