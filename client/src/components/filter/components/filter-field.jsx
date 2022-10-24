import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

const FilterField = ({
  fieldLabel, options, value, onChange,
}) => (
  <FormControl fullWidth>
    <InputLabel>{fieldLabel}</InputLabel>
    <Select
      value={value}
      variant="standard"
      SelectDisplayProps={{
        sx: {
          fontSize: '20px',
          border: 5,
        },
      }}
      onChange={onChange}
    >
      {options.map(({ id, label }) => (
        <MenuItem key={label} value={id}>{label}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default FilterField;
