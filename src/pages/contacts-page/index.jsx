import React from 'react';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PersonalInformation from './components/personal-information';
import Contacts from './components/contacts';
import { Form } from './components';

const initialValues = {
  firstName: '',
  surname: '',
  email: '',
  phoneNumber: '',
  question: '',
};

const validationSchema = yup.object({
  firstName: yup.string()
    .required('Name is required')
    .max(10, 'Name is too long')
    .matches(/^[A-Za-z, Ąą, Čč, Ęę, Ėė, Įį, Šš, Ųų Ūū, Žž]+$/, 'Name must contain only letters'),
  surname: yup.string()
    .required('Surname is required')
    .max(10, 'Surname is too long')
    .matches(/^[A-Za-z, Ąą, Čč, Ęę, Ėė, Įį, Šš, Ųų Ūū, Žž]+$/, 'Name must contain only letters'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  phoneNumber: yup.string()
    .min(9, 'Number is too short')
    .max(11, 'Number is too long'),
  question: yup.string()
    .required('Question is required')
    .matches(/^[A-Za-z, Ąą, Čč, Ęę, Ėė, Įį, Šš, Ųų Ūū, Žž]+$/, 'Name must contain only letters'),
});

const ContactsPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      pt: 5,
    }}
    >
      <Form component="form" onSubmit={handleSubmit}>
        <PersonalInformation
          values={values}
          errors={errors}
          touched={touched}
          dirty={dirty}
          isValid={isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Contacts />
      </Form>
    </Box>
  );
};

export default ContactsPage;
