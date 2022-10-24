import {
  Box,
  styled,
} from '@mui/material';

export { default as CartImage } from './cart-image';
export { default as CartItemDesc } from './cart-item-desc';
export { default as CartFooter } from './cart-footer';

export const Item = styled(Box)(({ theme }) => ({
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
