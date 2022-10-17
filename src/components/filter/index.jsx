import React from 'react';
import {
  Box,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const Filter = ({ filtersOpen }) => {
  const [bikeSuspensionType, setBikeSuspensionType] = React.useState('');
  const [bikeType, setBikeType] = React.useState('');
  const [bikeMaterial, setBikeMaterial] = React.useState('');
  const [bikeSize, setBikeSize] = React.useState('');

  const handleBikeSuspensionChange = (e) => {
    setBikeSuspensionType(e.target.value);
  };

  const hanldleBikeTypeChange = (e) => {
    setBikeType(e.target.value);
  };

  const handleBikeMaterialChange = (e) => {
    setBikeMaterial(e.target.value);
  };

  const handleBikeSizeChange = (e) => {
    setBikeSize(e.target.value);
  };

  return (
    <Drawer
      open={filtersOpen}
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
        py: 5, display: 'flex', flexDirection: 'column', gap: 5,
      }}
      >
        <FormControl fullWidth>
          <InputLabel>Suspension</InputLabel>
          <Select
            value={bikeSuspensionType}
            variant="standard"
            SelectDisplayProps={{
              sx: {
                fontSize: '20px',
              },
            }}
            onChange={handleBikeSuspensionChange}
          >
            <MenuItem value="Full-Suspension">Rear and Front</MenuItem>
            <MenuItem value="Hard-Tail">Front</MenuItem>
            <MenuItem value="Down-Hill">None</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={bikeType}
            variant="standard"
            SelectDisplayProps={{
              sx: {
                fontSize: '20px',
              },
            }}
            onChange={hanldleBikeTypeChange}
          >
            <MenuItem value="Electric">Electric</MenuItem>
            <MenuItem value="Non-Electric">Non-Electric</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Material</InputLabel>
          <Select
            value={bikeMaterial}
            variant="standard"
            SelectDisplayProps={{
              sx: {
                fontSize: '20px',
              },
            }}
            onChange={handleBikeMaterialChange}
          >
            <MenuItem value="Carbon">Carbon</MenuItem>
            <MenuItem value="Aluminium">Aluminium</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Size</InputLabel>
          <Select
            value={bikeSize}
            variant="standard"
            SelectDisplayProps={{
              sx: {
                fontSize: '20px',
              },
            }}
            onChange={handleBikeSizeChange}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Drawer>
  );
};

export default Filter;
