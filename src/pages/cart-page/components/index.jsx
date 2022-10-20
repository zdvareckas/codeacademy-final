import { Box, styled } from '@mui/material';

export { default as CartImage } from './cart-image';
export { default as CartItemDesc } from './cart-item-desc';

export const CartItem = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
