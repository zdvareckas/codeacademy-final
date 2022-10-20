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
  const { cart, removeFromCart, updateCartItemCount } = React.useContext(UserCartContext);
  const [amount, setAmount] = React.useState(1);

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
              <CartImage image={x?.images} />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              >
                <CartItemDesc
                  title={x?.title}
                  price={x?.price}
                  size={x?.size?.label}
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
                      setAmount(amount + 1);
                      updateCartItemCount({ item: x, amount });
                    }}
                  >
                    <AddIcon />

                  </IconButton>
                  <Typography>{x.amount}</Typography>
                  <IconButton
                    onClick={() => {
                      setAmount(amount - 1);
                      updateCartItemCount({ item: x, amount });
                    }}
                    disabled={x.amount === 0}
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
                {(Number(x.price) * x.amount).toFixed(2)}
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

      </Paper>
    </Container>
  );
};

export default CartPage;
