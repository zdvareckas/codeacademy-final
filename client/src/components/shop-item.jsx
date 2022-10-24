import React from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ShopItem = ({
  id, title, images, price, itemType, size,
}) => {
  const navigate = useNavigate();

  return (
    <Paper
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        backgroundColor: '#F3F0F3',
        p: 1,
        border: 3,
        borderStyle: 'dashed',
        borderColor: 'grey.400',
      }}
    >
      <Box
        component="img"
        src={images[0]}
        sx={{ objectFit: 'contain' }}
      />
      <Box>
        <Typography
          textAlign="center"
          sx={{
            backgroundColor: 'primary.main',
            color: 'common.white',
            width: 30,
            pt: 0.5,
          }}
        >
          {size}
        </Typography>
      </Box>

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
          $
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
