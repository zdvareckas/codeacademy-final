import { TextField } from '@mui/material';
import React from 'react';

const FormTextField = ({
  fieldLabel, fieldName, values, touched, errors, type = null,
  onChange, onBlur,
}) => (
  <TextField
    fullWidth
    type={type}
    label={fieldLabel}
    name={fieldName}
    value={values}
    onChange={onChange}
    onBlur={onBlur}
    error={touched && Boolean(errors)}
    helperText={touched && errors}
  />
);
export default FormTextField;
