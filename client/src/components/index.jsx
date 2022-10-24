import { Box, Paper, styled } from '@mui/material';

export { default as Navbar } from './navbar';
export { default as Filter } from './filter';
export { default as Banner } from './banner';
export { default as AuthForm } from './auth-form';
export { default as ResponsiveItemsGrid } from './responsive-items-grid';
export { default as ShopItem } from './shop-item';
export { default as Footer } from './footer';

export const ScrollableImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    maxHeight: theme.spacing(34),
    flexGrow: 2,
  },
  [theme.breakpoints.up('xs')]: {
    maxHeight: theme.spacing(50),
    flexGrow: 2,
  },
  [theme.breakpoints.up('md')]: {
    maxHeight: theme.spacing(65),
    flexGrow: 2,
  },
  overflow: 'auto',
  '&::-webkit-scrollbar': { width: 0 },
}));

export const ItemContent = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100%', md: '40%' },
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
  padding: theme.spacing(1),
  gap: theme.spacing(2),
}));
