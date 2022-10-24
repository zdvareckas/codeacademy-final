import React from 'react';
import {
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartItemDesc, CartImage, Item } from '.';

const CartItem = ({ item, removeFromCart, updateCartItemCount }) => (
  <Item key={item.id}>
    <Box sx={{ display: 'flex', py: 2, gap: 2 }}>
      <CartImage image={item?.images} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
        <CartItemDesc
          title={item?.title}
          price={item?.price}
          size={item?.size?.label}
        />
      </Box>
    </Box>

    <Box sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: { xs: 'row', md: 'column' },
      justifyContent: 'space-between',
      minHeight: '100%',
    }}
    >
      <Typography
        variant="h6"
        color="grey.600"
      >
        Total:
        $
        {(Number(item.price) * item.amount).toFixed(2)}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: 1,
          borderRadius: 5,
          borderColor: 'grey.400',
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
            disabled={item.amount === 1}
          >
            <RemoveIcon />
          </IconButton>

        </Box>

        <IconButton
          size="large"
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          <DeleteIcon
            color="error"
          />
        </IconButton>
      </Box>

    </Box>

  </Item>
);

export default CartItem;
