const { Schema, model, Types } = require('mongoose');
const yup = require('yup');

const bikeSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  suspensionId: {
    type: Schema.Types.ObjectId,
    ref: 'Suspension',
    required: true
  },
  typeId: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true
  },
  materialId: {
    type: Schema.Types.ObjectId,
    ref: 'Material',
    required: true
  },
  sizeId: {
    type: Schema.Types.ObjectId,
    ref: 'Size',
    required: true
  },
}, {
  timestamps: true
});

const bikeValidationSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .typeError('Title must be a string'),
  description: yup.string()
    .required('Title is required')
    .typeError('Title must be a string')
    .max(200, 'Description is too long'),
  images: yup.array()
    .required('Images required')
    .typeError('Images must be an array'),
  price: yup.number()
    .required('Price required')
    .typeError('Price must be a number'),
  suspensionId: yup
    .string().typeError('suspensionId must be a string')
    .required('suspensionId is required')
    .test(
      'is-mongo-object-id',
      'suspensionId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
  typeId: yup
    .string().typeError('typeId must be a string')
    .required('typeId is required')
    .test(
      'is-mongo-object-id',
      'typeId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
  materialId: yup
    .string().typeError('materialId must be a string')
    .required('materialId is required')
    .test(
      'is-mongo-object-id',
      'materialId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
  sizeId: yup
    .string().typeError('sizeId must be a string')
    .required('sizeId is required')
    .test(
      'is-mongo-object-id',
      'sizeId must be valid MongoDB object Id',
      Types.ObjectId.isValid
    ),
});

const bikeUpdateValidationSchema = yup.object().shape({
  title: yup.string()
    .typeError('Title must be a string'),
  description: yup.string()
    .typeError('Title must be a string')
    .max(200, 'Description is too long'),
  images: yup.array()
    .typeError('Images must be an array'),
  price: yup.number()
    .typeError('Price must be a number'),
  suspensionId: yup
    .string().typeError('suspensionId must be a string'),
  typeId: yup
    .string().typeError('typeId must be a string'),
  materialId: yup
    .string().typeError('materialId must be a string'),
  sizeId: yup
    .string().typeError('sizeId must be a string'),
});

bikeSchema.statics.validateNew = (bikeData) => bikeValidationSchema.validateSync(bikeData);
bikeSchema.statics.validateUpdate = (bikeData) => bikeUpdateValidationSchema.validateSync(bikeData);

const BikeModel = model('Bike', bikeSchema);

module.exports = BikeModel;

