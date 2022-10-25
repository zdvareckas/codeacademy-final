import { TextField } from '@mui/material';
import React from 'react';

const FormTextArea = ({
  fieldLabel, fieldName, values, touched, errors,
  onChange, onBlur,
}) => (
  <TextField
    label={fieldLabel}
    name={fieldName}
    multiline
    minRows={4}
    value={values}
    onChange={onChange}
    onBlur={onBlur}
    error={touched && Boolean(errors)}
    helperText={touched && errors}
  />
);
export default FormTextArea;
