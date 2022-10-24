const { createNotFoundError, sendErrorResponse, createBadDataError } = require('../helpers/errors');
const { hashPassword, comparePasswords } = require('../helpers/password-encryption');
const { createToken } = require('../helpers/token')
const UserModel = require('../model/user-model');
const createUserViewModel = require('../viewmodels/create-user-viewmodel');

const login = async (req, res) => {
  const { email, password } = req.body;
  const existingCrediantials = Boolean(email && password);

  try {
    if (!existingCrediantials) throw new Error('Missing credentials');
    const userDoc = await UserModel.findOne({ email });
    if (userDoc === null) throw createNotFoundError(`User with email: ${email} not found`);
    const correctPassword = await comparePasswords(password, userDoc.password);

    if (!correctPassword) throw new Error('Password is incorrect');

    res.status(200).json({
      user: createUserViewModel(userDoc),
      token: createToken({ email: userDoc.email, role: userDoc.role })
    });

  } catch (err) {
    sendErrorResponse(err, res)
  }
};

const register = async (req, res) => {
  const userData = req.body;

  try {
    await UserModel.validateNew(userData);
    const { email, password, img, fullname } = userData;

    const userDoc = await UserModel.create({
      email,
      password: await hashPassword(password),
      img,
      fullname
    });

    res.status(201).json({
      user: userDoc,
      token: createToken({ email: userDoc.email, role: userDoc.role })
    });

  } catch (err) {
    sendErrorResponse(err, res)
  }
};

const auth = async (req, res) => {
  res.status(201).json({
    user: createUserViewModel(req.authUser),
    token: createToken({ email: req.authUser.email, role: req.authUser.role }),
  });
};

const checkEmail = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) createBadDataError('Email not defined');
    const foundEmailUser = await UserModel.findOne({ email })

    res.status(200).json({ email, emailAvailable: foundEmailUser === null })

  } catch (error) {
    sendErrorResponse(err, res)
  }
};

module.exports = {
  login,
  register,
  auth,
  checkEmail,
};
