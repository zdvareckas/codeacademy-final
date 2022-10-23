const { Schema, model, Types } = require('mongoose');
const yup = require('yup');

const equipmentSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  sizeId: {
    type: Schema.Types.ObjectId,
    ref: 'Size',
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
}, {
  timestamps: true
});

const equipmentValidationSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .typeError('Title must be a string'),
  description: yup.string()
    .required('Title is required')
    .typeError('Title must be a string')
    .max(200, 'Description is too long'),
  price: yup.number()
    .required('Price required')
    .typeError('Price must be a number'),
  images: yup.array()
    .required('Images required')
    .typeError('Images must be an array'),
  sizeId: yup
    .string().typeError('sizeId must be a string')
    .required('sizeId is required')
    .test(
      'is-mongo-object-id',
      'sizeId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
  categoryId: yup
    .string().typeError('categoryId must be a string')
    .required('categoryId is required')
    .test(
      'is-mongo-object-id',
      'categoryId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
});

const equipmentUpdateValidationSchema = yup.object().shape({
  title: yup.string()
    .typeError('Title must be a string'),
  description: yup.string()
    .typeError('Title must be a string')
    .max(200, 'Description is too long'),
  price: yup.number()
    .typeError('Price must be a number'),
  images: yup.array()
    .required('Images required')
    .typeError('Images must be an array'),
  sizeId: yup
    .string().typeError('sizeId must be a string')
    .test(
      'is-mongo-object-id',
      'sizeId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
  categoryId: yup
    .string().typeError('categoryId must be a string')
});

equipmentSchema.statics.validateNew = (equipmentData) => equipmentValidationSchema.validateSync(equipmentData);
equipmentSchema.statics.validateUpdate = (equipmentData) => equipmentUpdateValidationSchema.validateSync(equipmentData);

const EquipmentModel = model('Equipment', equipmentSchema);

module.exports = EquipmentModel;
