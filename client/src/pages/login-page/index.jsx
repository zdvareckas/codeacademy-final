import * as React from 'react';
import {
  TextField, Button, Box, Typography, Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import AuthForm from '../../components/auth-form';
import AuthContext from '../../store/auth/auth-context';
import { authClearErrorsAction, createLoginThunkAction } from '../../store/auth/auth-actions';

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

const LoginPage = () => {
  const { error, dispatch } = React.useContext(AuthContext);

  const [serachParams] = useSearchParams();

  const onSubmitRef = React.useRef((credentials) => {
    const redirect = serachParams.get('redirect');
    dispatch(createLoginThunkAction(credentials, redirect));
    // eslint-disable-next-line no-use-before-define
    resetForm();
  });

  const {
    values, dirty, errors, touched, isValid,
    handleSubmit, handleChange, handleBlur, resetForm,
  } = useFormik({
    initialValues,
    onSubmit: onSubmitRef.current,
    validationSchema,
  });

  return (
    <Box>
      {error && (
        <Alert severity="error" onClose={() => dispatch(authClearErrorsAction)}>
          {error}
        </Alert>
      )}
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
