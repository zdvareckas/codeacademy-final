import React from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import useFilterContext from '../../hooks/useFilterContext';

const Filter = ({ handleReset, children }) => {
  const { filterOpen, handleFilterOpen } = useFilterContext();

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          right: { xs: '6%', md: 100 },
        }}
      >
        <Button
          fullWidth
          onClick={handleFilterOpen}
          variant="outlined"
          sx={{
            border: 2,
            borderRadius: 2,
            borderColor: 'grey.400',
          }}
        >
          Filters
          <TuneIcon />
        </Button>
      </Box>

      <Drawer
        open={filterOpen}
        variant="persistent"
        sx={{
          position: 'relative',
          display: `${filterOpen ? 'flex' : 'none'}`,
        }}
        PaperProps={{
          sx: {
            position: { lg: 'static' },
            gap: 5,
            py: 5,
            px: 1,
            width: 300,
            backgroundColor: {
              lg: 'transparent',
            },
            border: 0,
            mt: { xs: 8, lg: '0' },
          },
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
          }}
          onClick={handleFilterOpen}
        >
          <CloseIcon />
        </IconButton>
        {children}
        <Button
          variant="contained"
          color="error"
          onClick={handleReset}
        >
          Reset filters
        </Button>
      </Drawer>
    </>
  );
};
export default Filter;
