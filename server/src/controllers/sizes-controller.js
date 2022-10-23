const SizeModel = require('../model/size-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const createSizeViewModel = require('../viewmodels/create-size-viewmodel');

const createSizeNotFoundError = (sizeId) => createNotFoundError(`Size #${sizeId} not found`);

const fetchAll = async (req, res) => {

  try {
    const sizeDocuments = await SizeModel.find()

    res.status(200).json(
      sizeDocuments.map((x) => createSizeViewModel(x)))
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const sizeId = req.params.id;

  try {
    const foundSize = await SizeModel.findById(sizeId)

    if (foundSize === null) throw createSizeNotFoundError(sizeId);

    res.status(200).json(createSizeViewModel(foundSize))
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newSizeData = req.body;
  try {
    SizeModel.validateNew(newSizeData);

    const newSize = await SizeModel.create(newSizeData)

    res.status(201).json(newSize)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const sizeId = req.params.id;
  const { label } = req.body;

  const newSizeData = { label };

  try {
    await SizeModel.validateUpdate(newSizeData);

    const updatedSize = await SizeModel.findByIdAndUpdate(
      sizeId,
      newSizeData,
      { new: true }
    );

    if (updatedSize === null) throw createSizeNotFoundError(sizeId);

    res.status(200).json(updatedSize)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const sizeId = req.params.id;
  const { label } = req.body;
  const newSizeData = { label };

  try {
    SizeModel.validateNew(newSizeData);

    const foundSize = await SizeModel.findByIdAndUpdate(
      sizeId,
      newSizeData, { new: true, runValidators: true }
    );

    if (!foundSize) throw createSizeNotFoundError(sizeId);

    res.status(200).json(foundSize)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const sizeId = req.params.id;

  try {
    const deletedSize = await SizeModel.findByIdAndDelete(sizeId);
    if (deletedSize === null) throw createSizeNotFoundError(sizeId);

    res.status(200).json(deletedSize);
  } catch (err) { sendErrorResponse(err, res) }
};

module.exports = ({
  fetchAll,
  fetch,
  create,
  update,
  replace,
  remove,
});
