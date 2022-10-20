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

const CartPage = () => {
  const [amount, setAmount] = React.useState(1);
  const handleAmountInc = () => {
    setAmount(amount + 1);
  };
  const handleAmountDec = () => {
    setAmount(amount - 1);
  };

  const price = 13.99;

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
        <CartItem>
          <Box sx={{ display: 'flex', py: 2, gap: 2 }}>
            <CartImage image="https://assets.specialized.com/i/specialized/95221-06_LEVO-SW-CARBON-METWHTSIL-CHRM-DRMSIL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto" />

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            >
              <CartItemDesc title="Title" price="66.66" size="XL" />

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                border: 1,
                borderRadius: 50,
              }}
              >
                <IconButton onClick={handleAmountInc}><AddIcon /></IconButton>
                <Typography>{amount}</Typography>
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
              {(price * amount).toFixed(2)}
            </Typography>
            <IconButton sx={{ position: 'absolute', bottom: 0, right: 0 }}><DeleteIcon /></IconButton>
          </Box>
        </CartItem>
        <Divider />
      </Paper>

    </Container>
  );
};

export default CartPage;
