import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import ProfileNavBtn from './components/profile-nav-btn';
import AdminControlls from './components/admin/admin-controlls';

const ProfilePage = () => {
  const { user } = useAuthContext();

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
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        p: 1,
      }}
      >
        <Box
          component="img"
          src={user.img === '' ? './no-img.jpg' : user.img}
          sx={{
            alignSelf: 'center',
            width: 300,
            borderRadius: '25%',
          }}
        />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          gap: 2,
        }}
        >
          <Typography
            variant="h4"
          >
            Greetings,
            {' '}
            {user.fullname}
            !
          </Typography>

          <Typography>
            Your current email is:
            {' '}
            {user.email}
          </Typography>
          <Typography>
            Your current role is:
            {' '}
            {user.role}
          </Typography>

          <AdminControlls />

          <Box sx={{
            display: 'flex',
            alignItems: 'end',
            height: '100%',
            gap: 1,
          }}
          >
            <ProfileNavBtn path="bikes" />
            <ProfileNavBtn path="equipment" />
            <ProfileNavBtn path="cart" />
          </Box>
        </Box>

      </Paper>
    </Container>
  );
};
export default ProfilePage;
