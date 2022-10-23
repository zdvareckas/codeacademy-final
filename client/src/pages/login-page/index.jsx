import * as React from 'react';
import {
  TextField, Button, Box, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string()
      .required('Required')
      .email('Wrong E-mail format'),
    password: yup.string()
      .required('Required')
      .min(8, 'Password is too short'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    values, dirty, errors, touched, isValid,
    handleSubmit, handleChange, handleBlur,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box>
      <AuthForm
        btnDisabled={!dirty || !isValid}
        btnText="Login"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" textAlign="center">Login</Typography>

        <TextField
          name="email"
          label="E-mail"
          size="small"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          label="Password"
          size="small"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          href="/auth/register"
          fullWidth
          variant="contained"
          sx={{ order: 2 }}
        >
          New user? Register..
        </Button>
      </AuthForm>
    </Box>
  );
};

export default LoginPage;
