import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const FormSelectField = ({
  fieldLabel, fieldName, values, touched, errors, options,
  onChange, onBlur,
}) => (
  <TextField
    select
    fullWidth
    label={fieldLabel}
    name={fieldName}
    value={values}
    onChange={onChange}
    onBlur={onBlur}
    error={touched && Boolean(errors)}
    helperText={touched && errors}
  >
    {options?.map(({ id, label }) => (
      <MenuItem
        key={id}
        value={id}
      >
        {label}
      </MenuItem>
    ))}
  </TextField>
);

export default FormSelectField;
