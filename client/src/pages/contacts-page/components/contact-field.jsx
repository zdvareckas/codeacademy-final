import * as React from 'react';
import { Typography } from '@mui/material';

const ContactField = ({ children }) => (
  <Typography
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      border: 0,

    }}
  >
    {children}
  </Typography>
);

export default ContactField;
