import React from 'react';
import {
  Box, Button, Container, Grid, Paper, Typography,
} from '@mui/material';
import Filter from '../../components/filter';

const BikesPage = () => (
  <Box sx={{ position: 'relative', display: 'flex', gap: 5 }}>
    <Filter />
    <Container>

      <Grid
        container
        spacing={3}
        sx={{ mt: 5 }}
      >
        <Grid
          item
          xs={3}
        >
          <Paper sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          >
            <Box
              component="img"
              src="https://assets.specialized.com/i/specialized/95221-06_LEVO-SW-CARBON-METWHTSIL-CHRM-DRMSIL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
              sx={{ objectFit: 'contain' }}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              px: 2,
            }}
            >
              <Typography
                fontWeight="bold"
                variant="h5"
              >
                S-Works Turbo Levo
              </Typography>
              <Typography variant="body1">$ 15,000</Typography>
            </Box>
            <Button variant="contained" fullWidth>Preview</Button>
          </Paper>

        </Grid>

      </Grid>

    </Container>
  </Box>
);
export default BikesPage;
