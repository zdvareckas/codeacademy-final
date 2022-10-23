const { Schema, model } = require('mongoose');
const yup = require('yup');

const materialSchema = Schema({
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const materialValidationSchema = yup.object().shape({
  label: yup.string().typeError('material.label must be a string')
    .required('material.label required'),
});

const materialUpdateValidationSchema = yup.object().shape({
  label: yup.string().typeError('material.label must be a string'),
});

materialSchema.statics.validateNew = (materialData) => materialValidationSchema.validateSync(materialData);
materialSchema.statics.validateUpdate = (materialData) => materialUpdateValidationSchema.validateSync(materialData)

const MaterialModel = model('Material', materialSchema);

module.exports = MaterialModel;
