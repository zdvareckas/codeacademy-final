import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Background } from '../../components';
import * as Home from './components';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Background component="img" src="/hero.jpg" />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
          mt: 10,
          color: 'common.white',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ width: { xs: '100%', md: '60%' } }}
        >
          Start your mountain biking journey here!
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { xs: 'center', sm: 'start' },
          gap: 10,
        }}
        >
          <Home.Btn
            fullWidth
            onClick={() => navigate('/bikes')}
          >
            BIKES
          </Home.Btn>
          <Home.Btn
            fullWidth
            onClick={() => navigate('/equipment')}
          >
            EQUIPMENT
          </Home.Btn>
        </Box>
      </Container>
    </Box>
  );
};
export default HomePage;
