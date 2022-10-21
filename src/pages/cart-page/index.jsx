import React from 'react';
import {
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import CartItem from './components/cart-item';
import UserCartContext from '../../contexts/cart-context';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemCount } = React.useContext(UserCartContext);

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    }}
    >
      <Paper sx={{ width: '80%', p: 5, my: 20 }}>
        <Typography variant="h4">Cart</Typography>
        <Typography>
          Total:
          {cart.reduce((prevSum, x) => (prevSum + (x.price * x.amount)), 0)}
        </Typography>
        <Divider />
        {cart.map((item) => (
          <CartItem
            item={item}
            removeFromCart={removeFromCart}
            updateCartItemCount={updateCartItemCount}
          />
        ))}

      </Paper>
    </Container>
  );
};

export default CartPage;
