const { Schema, model, Types } = require('mongoose');
const yup = require('yup');

const userShema = Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },
  img: {
    type: String,
  },
}, {
  timestamps: true
});

const userValidationSchema = yup.object().shape({
  fullname: yup.string()
    .typeError('fullname must be a string')
    .required('fullname is required'),

  email: yup.string()
    .typeError('Email must be a string')
    .required('Email required')
    .email('Wrong email format')
    .test(
      'email-check',
      'This email adress already exists',
      async (email) => {
        const foundUser = await UserModel.findOne({ email })

        return foundUser === null;
      }
    ),

  emailConfirmation: yup.string().typeError('emailConfirmation must be a string')
    .required('emailConfirmation is required')
    .oneOf([yup.ref('email')], 'Passwords does not match'),

  password: yup.string().typeError('Password must be a string')
    .required('Password is required')
    .min(8, 'Password must have at least 8 symbols')
    .max(32, 'Password must be no more than 32 symbols')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/\d/, 'Password must have at least one number')
    .matches(/\W/, 'Password must have at least one special symbol'),

  passwordConfirmation: yup.string().typeError('PasswordConfirmation must be a string')
    .required('PasswordConfirmation is required')
    .oneOf([yup.ref('password')], 'Passwords does not match'),

  role: yup.string().typeError('Role must be a string'),

  img: yup.string().typeError('Role must be a string'),

});

const userUpdateValidationSchema = yup.object().shape({
  email: yup.string()
    .typeError('Email must be a string')
    .email('Wrong email format')
    .test(
      'email-check',
      'This email adress already exists',
      async (email) => {
        const foundUser = await UserModel.findOne({ email })

        return foundUser === null;
      }
    ),

  emailConfirmation: yup.string()
    .typeError('Email must be a string')
    .oneOf([yup.ref('email')], 'Passwords does not match'),

  password: yup.string().typeError('Password must be a string')
    .min(8, 'Password must have at least 8 symbols')
    .max(32, 'Password must be no more than 32 symbols')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/\d/, 'Password must have at least one number')
    .matches(/\W/, 'Password must have at least one special symbol'),

  passwordConfirmation: yup.string().typeError('PasswordConfirmation must be a string')
    .oneOf([yup.ref('password')], 'Passwords does not match'),

  role: yup.string().typeError('Role must be a string')
    .oneOf(['USER', 'ADMIN']),

  img: yup.string().typeError('Role must be a string'),


});

userShema.statics.validateNew = (userData) => userValidationSchema.validate(userData);
userShema.statics.validateUpdate = (userData) => userUpdateValidationSchema.validate(userData)

const UserModel = model('User', userShema);

module.exports = UserModel;
