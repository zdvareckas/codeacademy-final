import { Box, styled } from '@mui/material';

export const ScrollableImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    maxHeight: theme.spacing(30),
    flexGrow: 2,
  },
  [theme.breakpoints.up('md')]: {
    maxHeight: theme.spacing(64),
    width: '50%',
  },
  overflow: 'auto',
  '&::-webkit-scrollbar': { width: 0 },
}));
