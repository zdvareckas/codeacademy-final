import { Box, Paper, styled } from '@mui/material';

export { default as Navbar } from './navbar';
export { default as Filter } from './filter';
export { default as Banner } from './banner';
export { default as AuthForm } from './auth-form';
export { default as ResponsiveItemsGrid } from './responsive-items-grid';
export { default as ShopItem } from './shop-item';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: '-1',
});

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
  minHeight: '500px',
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
