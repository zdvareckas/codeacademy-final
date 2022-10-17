import React from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ItemFilterContext from '../../contexts/filter-context';

const Filter = ({ handleReset, children }) => {
  const { filterOpen, handleFilterOpen } = React.useContext(ItemFilterContext);

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          right: 35,
          top: 210,
        }}
        onClick={handleFilterOpen}
      >
        <TuneIcon />
      </IconButton>

      <Drawer
        open={filterOpen}
        variant="persistent"
        elevation={0}
        PaperProps={{
          sx: {
            mt: 8,
            p: 4,
            width: 300,
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
        }}
        >
          {children}
          <Button
            onClick={handleReset}
          >
            Reset filters
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
export default Filter;
