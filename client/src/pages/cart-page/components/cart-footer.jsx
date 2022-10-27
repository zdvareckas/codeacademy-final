import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartFooter = ({ cart, loggedIn, handleCheckout }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: `${cart.length === 0 ? 'none' : 'flex'}`,
      justifyContent: 'space-between',
      border: 1,
      borderRadius: 0,
      borderColor: 'grey.300',
      color: 'grey.600',
      gap: 1,
      p: 2,
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

      <Button
        variant="contained"
        color="success"
        sx={{ display: `${loggedIn ? '' : 'none'}` }}
        onClick={handleCheckout}
      >
        CHECKOUT
      </Button>

      <Typography
        variant="h6"
      >
        Cart total:
        {cart.reduce((prevSum, x) => (prevSum + (x.price * x.amount)), 0)}
        $
      </Typography>
    </Box>
  );
};

export default CartFooter;
