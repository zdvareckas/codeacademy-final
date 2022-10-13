import { Box, Button, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: '-1',
});

export const Btn = styled(Button)({
  height: 150,
  width: 150,
  fontWeight: '800',
  fontSize: 18,
  border: 3,
  borderStyle: 'dashed',
  color: 'inherit',
});
