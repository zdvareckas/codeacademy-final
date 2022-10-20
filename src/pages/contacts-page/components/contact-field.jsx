import * as React from 'react';
import { Typography } from '@mui/material';

const ContactField = ({ children }) => (
  <Typography sx={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 1,
  }}
  >
    {children}
  </Typography>
);

export default ContactField;
