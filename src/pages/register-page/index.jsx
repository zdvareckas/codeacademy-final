import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';

const RegisterPage = () => {
  const initialValues = {
    fullname: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
    newsLetter: false,
  };

  const validationSchema = yup.object({
    fullname: yup.string()
      .required('Required')
      .min(6, 'Name and surname is too short'),
    email: yup.string()
      .required('Required')
      .email('Wrong e-mail format'),
    repeatEmail: yup.string()
      .required('Required')
      .oneOf([yup.ref('email'), null], 'E-mails doesn\'t match'),
    password: yup.string()
      .required('Required')
      .min(8, 'Minimum 8 symbols')
      .matches(/[a-z]/, 'Atleast one lower case is required')
      .matches(/[A-Z]/, 'Atleast one upper case is required')
      .matches(/\d/, 'Atleast one number is required'),
    repeatPassword: yup.string()
      .required('Required')
      .oneOf([yup.ref('password'), null], 'Passwords doesn\'t match'),
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
    <AuthForm
      btnText="Register"
      onSubmit={handleSubmit}
      btnDisabled={!dirty || !isValid}
    >
      <Typography variant="h4" textAlign="center">Registration</Typography>
      <TextField
        name="fullname"
        label="Fullname"
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullname && Boolean(errors.fullname)}
        helperText={touched.fullname && errors.fullname}
      />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          name="email"
          type="email"
          label="E-mail"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="repeatEmail"
          type="email"
          label="Repeat E-mail"
          value={values.repeatEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.repeatEmail && Boolean(errors.repeatEmail)}
          helperText={touched.repeatEmail && errors.repeatEmail}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          name="password"
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <TextField
          name="repeatPassword"
          type="password"
          label="Repeat password"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.repeatPassword && Boolean(errors.repeatPassword)}
          helperText={touched.repeatPassword && errors.repeatPassword}
        />
      </Box>

      <FormControlLabel
        control={(
          <Checkbox
            name="newsLetter"
            value={values.newsLetter}
            onChange={handleChange}
          />
        )}
        label="News letter"
      />
    </AuthForm>
  );
};

export default RegisterPage;
