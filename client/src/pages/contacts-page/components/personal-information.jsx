import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

const PersonalInformation = ({
  values,
  errors,
  touched,
  dirty,
  isValid,
  handleChange,
  handleBlur,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  }}
  >
    <Typography
      variant="h3"
      textAlign="center"
      fontWeight="bold"
      color="grey.600"
    >
      Ask us!
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        label="Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <TextField
        fullWidth
        label="Surname"
        name="surname"
        value={values.surname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.surname && Boolean(errors.surname)}
        helperText={touched.surname && errors.surname}
      />
    </Box>
    <TextField
      fullWidth
      label="E-mail"
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
    <TextField
      fullWidth
      label="Phone number"
      name="phoneNumber"
      type="number"
      value={values.phoneNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
      helperText={touched.phoneNumber && errors.phoneNumber}
    />

    <TextField
      fullWidth
      label="Question"
      name="question"
      value={values.question}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.question && Boolean(errors.question)}
      helperText={touched.question && errors.question}
    />

    <Button
      type="submit"
      variant="contained"
      color="success"
      disabled={!dirty || !isValid}
    >
      Contact..
    </Button>
    <Divider />
  </Box>
);

export default PersonalInformation;
