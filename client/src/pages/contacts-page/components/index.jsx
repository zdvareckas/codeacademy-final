import { Box, styled } from '@mui/material';

export const Form = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(5),
  backgroundColor: '#F3F0F3',
  borderRadius: theme.spacing(0),
}));
