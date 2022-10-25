/* eslint-disable no-use-before-define */
import React from 'react';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { bikesService } from '../../../../../services/bikes-service';
import { AuthForm } from '../../../../../components';
import {
  FormTextField,
  FormSelectField,
  FormTextArea,
} from '.';

const initialValues = {
  title: '',
  price: '',
  sizeId: '',
  typeId: '',
  materialId: '',
  suspensionId: '',
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
  typeId: yup.string()
    .required('Required'),
  suspensionId: yup.string()
    .required('Required'),
  materialId: yup.string()
    .required('Required'),
  images: yup.string(),
});

const BikeCreationForm = ({
  bikeSizes, bikeSuspensions, bikeMaterials, bikeTypes,
}) => {
  const onSubmit = async () => {
    await bikesService.addNew(values);
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

      <Box sx={{ display: 'flex', gap: 1 }}>
        <FormSelectField
          fieldLabel="Size"
          fieldName="sizeId"
          values={values.sizeId}
          touched={touched.sizeId}
          errors={errors.sizeId}
          options={bikeSizes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormSelectField
          fieldLabel="Suspension"
          fieldName="suspensionId"
          values={values.suspensionId}
          touched={touched.suspensionId}
          errors={errors.suspensionId}
          options={bikeSuspensions}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <FormSelectField
          fieldLabel="Type"
          fieldName="typeId"
          values={values.typeId}
          touched={touched.typeId}
          errors={errors.typeId}
          options={bikeTypes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormSelectField
          fieldLabel="Material"
          fieldName="materialId"
          values={values.materialId}
          touched={touched.materialId}
          errors={errors.materialId}
          options={bikeMaterials}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>
      <FormTextArea
        fieldLabel="Image links"
        fieldName="images"
        values={values.images}
        touched={touched.images}
        errors={errors.images}
        options={bikeMaterials}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormTextArea
        fieldLabel="Description"
        fieldName="description"
        values={values.description}
        touched={touched.description}
        errors={errors.description}
        options={bikeMaterials}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthForm>
  );
};

export default BikeCreationForm;
