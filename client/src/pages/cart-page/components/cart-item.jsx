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
  padding: theme.spacing(1),
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
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

      <Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          sx={{ position: 'absolute', right: 0 }}
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          <DeleteIcon />
        </IconButton>

      </Box>

    </Box>

  </Item>
);

export default CartItem;
