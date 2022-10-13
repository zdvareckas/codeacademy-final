import React from 'react';
import {
  Box, Button, Container, Drawer, Grid, Paper, Typography,
} from '@mui/material';

const BikesPage = () => {
  const [open, setOpen] = React.useState(true);

  return (

    <Box sx={{ display: 'flex', gap: 5 }}>

      {/* TODO: filters  */}

      <Drawer
        open={open}
        variant="persistent"
        elevation={0}
        PaperProps={{
          sx: {
            p: 5,
            mt: 8,
            width: 350,
          },
        }}
      >
        asasd
      </Drawer>

      <Container>

        <Button onClick={() => {
          setOpen(!open);
        }}
        >
          FILTERS
        </Button>

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
};
export default BikesPage;
