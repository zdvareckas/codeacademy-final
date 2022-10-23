const { Schema, model } = require('mongoose');
const yup = require('yup');

const typeSchema = Schema({
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const typeValidationSchema = yup.object().shape({
  label: yup.string().typeError('type.label must be a string')
    .required('type.label required'),
});

const typeUpdateValidationSchema = yup.object().shape({
  label: yup.string().typeError('type.label must be a string'),
});

typeSchema.statics.validateNew = (typeData) => typeValidationSchema.validateSync(typeData);
typeSchema.statics.validateUpdate = (typeData) => typeUpdateValidationSchema.validateSync(typeData)

const TypeModel = model('Type', typeSchema);

module.exports = TypeModel;
