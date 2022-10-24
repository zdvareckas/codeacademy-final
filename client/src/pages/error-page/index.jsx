import React from 'react';
import {
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Background } from '../../components';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '80vh',
      gap: 5,
    }}
    >
      <Background component="img" src="../hero.jpg" />
      <Typography
        variant="h1"
        color="grey.200"
        fontWeight="bold"
        textAlign="center"
      >
        Got off the trail?
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/')}
      >
        Back to home
      </Button>
    </Container>
  );
};

export default ErrorPage;
