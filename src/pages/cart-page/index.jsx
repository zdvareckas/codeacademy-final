import React from 'react';
import {
  Container,
  Divider,
  Paper,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartItem, CartItemDesc, CartImage } from './components';
import UserCartContext from '../../contexts/cart-context';

const CartPage = () => {
  const [amount, setAmount] = React.useState(1);
  const { cart, removeFromCart } = React.useContext(UserCartContext);

  console.log(cart);
  const handleAmountInc = () => {
    setAmount(amount + 1);
  };
  const handleAmountDec = () => {
    setAmount(amount - 1);
  };

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    }}
    >
      <Paper sx={{ width: '70%', p: 5, my: 20 }}>
        <Typography variant="h4">Cart</Typography>
        <Divider />
        {cart.map((x) => (
          <CartItem key={x.id}>

            <Box sx={{ display: 'flex', py: 2, gap: 2 }}>
              <CartImage image={x.item?.images} />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              >
                <CartItemDesc
                  title={x.item?.title}
                  price={x.item?.price}
                  size={x.item?.size?.label}
                />

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: 1,
                  borderRadius: 50,
                }}
                >
                  <IconButton onClick={handleAmountInc}><AddIcon /></IconButton>
                  <Typography>{x.amount}</Typography>
                  <IconButton
                    onClick={handleAmountDec}
                    disabled={amount === 0}
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
                {(Number(x.item.price) * x.amount).toFixed(2)}
              </Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                }}
                onClick={() => {
                  removeFromCart(x.id);
                }}
              >
                <DeleteIcon />

              </IconButton>
            </Box>
          </CartItem>
        ))}

        <Divider />
      </Paper>

    </Container>
  );
};

export default CartPage;
