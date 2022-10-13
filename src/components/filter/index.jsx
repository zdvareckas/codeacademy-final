import React from 'react';
import {
  Drawer,
  IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const Filter = () => {
  const [filterOpen, setFilterOpen] = React.useState(false);

  return (
    <>
      <IconButton
        sx={{ position: 'absolute', right: '18%', top: '2%' }}
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
      >
        <TuneIcon />
      </IconButton>

      <Drawer
        open={filterOpen}
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
    </>

  );
};

export default Filter;
