import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItem from './components/cart-item';
import useUserCartContext from '../../hooks/useCartContext';
import useAuthContext from '../../hooks/useAuthContext';
import { CartFooter } from './components';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemCount } = useUserCartContext();
  const { user, loggedIn } = useAuthContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log({
      user: {
        fullname: user.fullname,
        email: user.email,
      },
      cart,
    });
  };

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      my: 20,
    }}
    >
      <Paper sx={{
        position: 'relative',
        width: '80%',
        minHeight: 300,
      }}
      >
        <Typography
          variant="h3"
          fontWeight="550"
          textAlign="center"
          color="grey.400"
          sx={{
            p: 1,
            borderBottom: 3,
          }}
        >
          Cart
        </Typography>

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
            mt: 5,
            gap: { xs: 4, sm: 10 },
          }}
          >
            <Typography
              variant="h3"
              textAlign="center"
            >
              Seems pretty empty in here..
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/bikes')}
            >
              Fill the cart !
            </Button>
          </Box>
        )}

        <CartFooter
          cart={cart}
          loggedIn={loggedIn}
          handleCheckout={handleCheckout}
        />

      </Paper>
    </Container>
  );
};

export default CartPage;
