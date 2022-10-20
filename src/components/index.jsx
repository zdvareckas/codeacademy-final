import { Box, Paper, styled } from '@mui/material';

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
