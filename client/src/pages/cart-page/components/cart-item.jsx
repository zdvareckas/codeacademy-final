import React from 'react';
import {
  Typography,
  Box,
  IconButton,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartItemDesc, CartImage } from '.';

const Item = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const CartItem = ({ item, removeFromCart, updateCartItemCount }) => (
  <Item key={item.id}>
    <Box sx={{ display: 'flex', py: 2, gap: 2 }}>
      <CartImage image={item?.images} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <CartItemDesc
          title={item?.title}
          price={item?.price}
          size={item?.size?.label}
        />

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: 1,
          borderRadius: 50,
        }}
        >
          <IconButton
            onClick={() => {
              updateCartItemCount({ item, amount: item.amount + 1 });
            }}
          >
            <AddIcon />

          </IconButton>
          <Typography>{item.amount}</Typography>
          <IconButton
            onClick={() => {
              updateCartItemCount({ item, amount: item.amount - 1 });
            }}
            disabled={item.amount === 0}
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}
    >
      <Typography>
        $
        {(Number(item.price) * item.amount).toFixed(2)}
      </Typography>

      <IconButton
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        <DeleteIcon />

      </IconButton>
    </Box>
  </Item>
);

export default CartItem;
