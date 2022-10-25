/* eslint-disable no-use-before-define */
import React from 'react';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AuthForm } from '../../../../../components';
import {
  FormTextField,
  FormSelectField,
  FormTextArea,
} from '.';
import { equiptmentService } from '../../../../../services/equiptment-service';

const initialValues = {
  title: '',
  price: '',
  sizeId: '',
  categoryId: '',
  description: '',
  images: '',
};

const validationSchema = yup.object({
  title: yup.string()
    .required('Required'),
  price: yup.number()
    .required('Required'),
  description: yup.string()
    .required('Required')
    .max(200, 'Description is too long'),
  sizeId: yup.string()
    .required('Required'),
  categoryId: yup.string()
    .required('Required'),
  images: yup.string(),
});

const EquipmentCreationForm = ({ sizes, equipmentCategories }) => {
  const onSubmit = async () => {
    await equiptmentService.addNew(values);
    resetForm();
  };

  const {
    values, dirty, errors, touched, isValid,
    handleSubmit, handleChange, handleBlur, resetForm,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <AuthForm
      onSubmit={handleSubmit}
      btnDisabled={!dirty || !isValid}
      btnText="ADD NEW"
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <FormTextField
          fieldLabel="Title"
          fieldName="title"
          values={values.title}
          touched={touched.title}
          errors={errors.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormTextField
          fieldLabel="Price"
          fieldName="price"
          type="number"
          values={values.price}
          touched={touched.price}
          errors={errors.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>

      <FormSelectField
        fieldLabel="Size"
        fieldName="sizeId"
        values={values.sizeId}
        touched={touched.sizeId}
        errors={errors.sizeId}
        options={sizes}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <FormSelectField
        fieldLabel="Category"
        fieldName="categoryId"
        values={values.categoryId}
        touched={touched.categoryId}
        errors={errors.categoryId}
        options={equipmentCategories}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <FormTextArea
        fieldLabel="Image links"
        fieldName="images"
        values={values.images}
        touched={touched.images}
        errors={errors.images}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormTextArea
        fieldLabel="Description"
        fieldName="description"
        values={values.description}
        touched={touched.description}
        errors={errors.description}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthForm>
  );
};

export default EquipmentCreationForm;
