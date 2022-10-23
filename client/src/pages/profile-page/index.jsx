import React from 'react';
import {
  Box, Button, Container, Paper, TextField, Typography,
} from '@mui/material';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useUserCartContext from '../../hooks/useCartContext';

const ProfilePage = () => {
  const { user } = useAuthContext();
  const { cart } = useUserCartContext();

  if (user === null) return <Navigate to="auth/login?redirect=/profile" />;

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mt: 10,
    }}
    >
      <Paper sx={{
        display: 'flex', flexDirection: 'column', gap: 3, p: 1,
      }}
      >
        <Box
          component="img"
          src={user.img === '' ? './no-img.jpg' : user.img}
          sx={{ width: 300, borderRadius: '25%' }}
        />
        <Box>
          <Typography
            variant="h4"
          >
            Greetings,
            {' '}
            {user.fullname}
            !
          </Typography>
          <Typography>
            Your cart currently has
            {' '}
            {cart.length}
            {' '}
            items
          </Typography>

          <Typography>
            Your current email is:
            {' '}
            {user.email}
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography>Update account information:</Typography>
          <TextField
            label="Email"
            name="email"
          />
          <TextField
            label="Fullname"
            name="fullname"
          />
          <Button
            variant="contained"
            color="success"
            type="submit"
          >
            Update
          </Button>
        </Box>

      </Paper>
    </Container>
  );
};
export default ProfilePage;
