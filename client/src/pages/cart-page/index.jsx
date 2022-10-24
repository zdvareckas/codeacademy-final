import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItem from './components/cart-item';
import useUserCartContext from '../../hooks/useCartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemCount } = useUserCartContext();
  const navigate = useNavigate();

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Paper sx={{
        position: 'relative',
        width: '80%',
        my: 20,
        minHeight: 300,
      }}
      >
        <Typography
          variant="h3"
          fontWeight="550"
          textAlign="center"
          color="grey.500"
          sx={{ p: 1 }}
        >
          Cart
        </Typography>

        <Divider />

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateCartItemCount={updateCartItemCount}
          />
        ))}

        {cart.length === 0 && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 5,
            gap: { xs: 4, sm: 10 },
          }}
          >
            <Typography
              variant="h3"
              textAlign="center"
            >
              Cart is currently empty..
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/bikes')}
            >
              Fill the cart !
            </Button>
          </Box>
        )}

        <Box sx={{
          display: `${cart.length === 0 ? 'none' : 'flex'}`,
          justifyContent: 'space-between',
          border: 1,
          borderRadius: 0,
          borderColor: 'grey.300',
          color: 'grey.600',
          p: 0.5,
        }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate('/bikes');
            }}
          >
            Back to shop..
          </Button>

          <Typography
            variant="h5"
          >
            Cart total:
            {cart.reduce((prevSum, x) => (prevSum + (x.price * x.amount)), 0)}
            $
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default CartPage;
