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
import { AuthForm } from '../../components';
import AuthService from '../../services/auth-service';

const RegisterPage = () => {
  const initialValues = {
    fullname: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    img: '',
    newsLetter: false,
  };

  const validationSchema = yup.object({
    fullname: yup.string()
      .required('Required')
      .min(6, 'Name and surname is too short'),
    email: yup.string()
      .required('Required')
      .email('Wrong e-mail format')
      .test(
        'checkEmailUnique',
        'Email taken',
        async (email, { parent: { initEmail } }) => {
          if (initEmail === email) return true;
          const emailAvailable = await AuthService.checkEmail(email);

          return emailAvailable;
        },
      ),
    emailConfirmation: yup.string()
      .required('Required')
      .oneOf([yup.ref('email'), null], 'E-mails doesn\'t match'),
    password: yup.string()
      .required('Required')
      .min(8, 'Minimum 8 symbols')
      .matches(/[a-z]/, 'Atleast one lower case is required')
      .matches(/[A-Z]/, 'Atleast one upper case is required')
      .matches(/\d/, 'Atleast one number is required')
      .matches(/\W/, 'Password must have at least one special symbol'),
    passwordConfirmation: yup.string()
      .required('Required')
      .oneOf([yup.ref('password'), null], 'Passwords doesn\'t match'),
    img: yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter a correct image URL',
      ),
  });

  const {
    values, dirty, errors, touched, isValid,
    handleSubmit, handleChange, handleBlur, resetForm,
  } = useFormik({
    initialValues,
    onSubmit: async () => {
      await AuthService.register(values);
      resetForm();
    },
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
          name="emailConfirmation"
          type="email"
          label="Repeat E-mail"
          value={values.emailConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
          helperText={touched.emailConfirmation && errors.emailConfirmation}
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
          name="passwordConfirmation"
          type="password"
          label="Repeat password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
          helperText={touched.passwordConfirmation && errors.passwordConfirmation}
        />

      </Box>

      <TextField
        name="img"
        label="Image link"
        value={values.img}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.img && Boolean(errors.img)}
        helperText={touched.img && errors.img}
      />

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
