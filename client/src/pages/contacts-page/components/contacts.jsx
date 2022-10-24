import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactField from './contact-field';

const contacts = [
  {
    id: '1',
    text: '+3706666666',
    icon: <CallIcon />,
  },
  {
    id: '2',
    text: 'bikes@bikes.com',
    icon: <AlternateEmailIcon />,
  },
  {
    id: '3',
    text: 'Mount Everest',
    icon: <LocationOnIcon />,
  },

];

const Contacts = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  }}
  >
    <Typography variant="h6" align="left">
      Contact Information
    </Typography>
    {contacts.map(({ id, text, icon }) => (
      <ContactField key={id}>
        {icon}
        {text}
      </ContactField>
    ))}

  </Box>
);

export default Contacts;
