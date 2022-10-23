import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
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
  <>
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
        variant="filled"
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
        variant="filled"
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
      variant="filled"
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
      variant="filled"
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
      variant="filled"
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
  </>
);

export default PersonalInformation;
