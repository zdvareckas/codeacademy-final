const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const { hashPassword } = require('../helpers/password-encryption')
const UserModel = require('../model/user-model');

const createUserNotFoundError = (userId) => createNotFoundError(`User #${userId} not found`);

const fetchAll = async (req, res) => {

  try {
    const usersDocs = await UserModel.find()

    res.status(200).json(usersDocs)
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const userId = req.params.id;

  try {
    const foundUser = await UserModel.findById(userId);
    if (foundUser === null) throw createUserNotFoundError(userId);

    res.status(200).json(foundUser)
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newUserData = req.body;

  try {
    await UserModel.validateNew(newUserData);
    const {
      fullname,
      email,
      password,
      role,
      img
    } = newUserData;

    const newUser = await UserModel.create({
      fullname,
      email,
      password: await hashPassword(password),
      role,
      img,
    })

    res.status(201).json(newUser)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    await UserModel.validateUpdate(userData);
    const {
      fullname,
      email,
      password,
      role,
      img
    } = userData;

    const updatedUserDoc = await UserModel.findByIdAndUpdate(
      userId,
      {
        fullname,
        email,
        password: password && await hashPassword(password),
        role,
        img
      },
      { new: true }
    );

    if (updatedUserDoc === null) throw createUserNotFoundError(userId);

    res.status(200).json(updatedUserDoc)
  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const userId = req.params.id;
  const requestData = req.body;

  try {
    await UserModel.validateNew(requestData);
    const {
      fullname,
      email,
      password,
      role,
      img,
    } = requestData;

    const userDoc = await UserModel.findById(userId);
    if (userDoc === null) throw createUserNotFoundError(userId);

    const replacedUserDoc = await UserModel.findOneAndReplace(
      { id: userId },
      {
        fullname,
        email,
        password: await hashPassword(password),
        role,
        img,
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: userDoc.__v,
      },
      {
        new: true,
      }
    );

    res.status(200).json(replacedUserDoc)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (deletedUser === null) throw createUserNotFoundError(userId);

    res.status(200).json(deletedUser);
  } catch (err) { sendErrorResponse(err, res) }
};

module.exports = ({
  fetchAll,
  fetch,
  create,
  update,
  replace,
  remove
});
