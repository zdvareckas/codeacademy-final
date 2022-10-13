import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Filter from '../../components/filter';
import ResponsiveItemsGrid from '../../components/responsive-items-grid';

const BikesPage = () => {
  const [filtersOpen, setFiltersOpen] = React.useState(true);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Filter
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
      />
      <ResponsiveItemsGrid filtersOpen={filtersOpen}>

        <IconButton
          sx={{ position: 'absolute', right: '105px', top: '-45px' }}
          onClick={() => {
            setFiltersOpen(!filtersOpen);
          }}
        >
          <TuneIcon />
        </IconButton>

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

      </ResponsiveItemsGrid>

    </Box>
  );
};

export default BikesPage;
