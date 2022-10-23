const { Schema, model } = require('mongoose');
const yup = require('yup');

const suspensionSchema = Schema({
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const suspensionValidationSchema = yup.object().shape({
  label: yup.string().typeError('suspension.label must be a string')
    .required('suspension.label required'),
});

const suspensionUpdateValidationSchema = yup.object().shape({
  label: yup.string().typeError('suspension.label must be a string'),
});

suspensionSchema.statics.validateNew = (suspensionData) => suspensionValidationSchema.validateSync(suspensionData);
suspensionSchema.statics.validateUpdate = (suspensionData) => suspensionUpdateValidationSchema.validateSync(suspensionData)

const SuspensionModel = model('Suspension', suspensionSchema);

module.exports = SuspensionModel;
