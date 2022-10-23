import React from 'react';
import {
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
      <IconButton
        sx={{
          position: 'absolute',
          right: { xs: '6%', md: '6%' },
          top: 15,
        }}
        onClick={handleFilterOpen}
      >
        <TuneIcon />
      </IconButton>

      <Drawer
        open={filterOpen}
        variant="persistent"
        sx={{
          position: 'relative',
          display: `${filterOpen ? 'flex' : 'none'}`,
        }}
        elevation={0}
        PaperProps={{
          sx: {
            position: { lg: 'static' },
            alignSelf: 'start',
            gap: 5,
            p: 4,
            width: 300,
            minHeight: '71vh',
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
        <Button onClick={handleReset}>Reset filters</Button>
      </Drawer>
    </>
  );
};
export default Filter;
