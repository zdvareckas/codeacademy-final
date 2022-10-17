import React from 'react';
import {
  Button,
  Drawer,
  IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
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
        sx={{ position: 'relative' }}
        PaperProps={{
          sx: {
            gap: 5,
            mt: 8,
            p: 4,
            width: 300,
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
