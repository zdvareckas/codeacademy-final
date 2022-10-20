import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
} from '@mui/material';

const PersonalInformation = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 1,
      }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Surname"
          variant="filled"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <TextField
        fullWidth
        label="E-mail"
        variant="filled"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Phone number"
        variant="filled"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <Button type="submit" variant="contained" color="success">Contact..</Button>
      <Divider />
    </>
  );
};

export default PersonalInformation;
