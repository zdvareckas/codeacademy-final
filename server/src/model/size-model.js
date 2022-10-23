const { Schema, model } = require('mongoose');
const yup = require('yup');

const sizeSchema = Schema({
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const sizeValidationSchema = yup.object().shape({
  label: yup.string().typeError('size.label must be a string')
    .required('size.label required'),
});

const sizeUpdateValidationSchema = yup.object().shape({
  label: yup.string().typeError('size.label must be a string'),
});

sizeSchema.statics.validateNew = (sizeData) => sizeValidationSchema.validateSync(sizeData);
sizeSchema.statics.validateUpdate = (sizeData) => sizeUpdateValidationSchema.validateSync(sizeData)

const SizeModel = model('Size', sizeSchema);

module.exports = SizeModel;
