const { Schema, model } = require('mongoose');
const yup = require('yup');

const categorySchema = Schema({
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const categoryValidationSchema = yup.object().shape({
  label: yup.string().typeError('category.label must be a string')
    .required('category.label required'),
});

const categoryUpdateValidationSchema = yup.object().shape({
  label: yup.string().typeError('category.label must be a string'),
});

categorySchema.statics.validateNew = (categoryData) => categoryValidationSchema.validateSync(categoryData);
categorySchema.statics.validateUpdate = (categoryData) => categoryUpdateValidationSchema.validateSync(categoryData)

const CategoryModel = model('Category', categorySchema);

module.exports = CategoryModel;
