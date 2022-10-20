import React from 'react';
import { Box } from '@mui/material';
import { Form } from './components';
import PersonalInformation from './components/personal-information';
import Contacts from './components/contacts';

const ContactsPage = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    pt: 5,
  }}
  >
    <Form component="form">
      <PersonalInformation />
      <Contacts />
    </Form>
  </Box>
);

export default ContactsPage;
