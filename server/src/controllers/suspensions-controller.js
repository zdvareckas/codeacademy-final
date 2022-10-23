const SuspensionModel = require('../model/suspension-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const createSuspensionViewModel = require('../viewmodels/create-suspension-viewmodel');

const createSuspensionNotFoundError = (suspensionId) => createNotFoundError(`Suspension #${suspensionId} not found`);

const fetchAll = async (req, res) => {

  try {
    const suspensionDocuments = await SuspensionModel.find()

    res.status(200).json(
      suspensionDocuments.map((x) => createSuspensionViewModel(x)))
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const suspensionId = req.params.id;

  try {
    const foundSuspension = await SuspensionModel.findById(suspensionId)

    if (foundSuspension === null) throw createSuspensionNotFoundError(suspensionId);

    res.status(200).json(createSuspensionViewModel(foundSuspension))
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newSuspensionData = req.body;
  try {
    SuspensionModel.validateNew(newSuspensionData);

    const newSuspension = await SuspensionModel.create(newSuspensionData)

    res.status(201).json(newSuspension)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const suspensionId = req.params.id;
  const { label } = req.body;

  const newSuspensionData = { label };

  try {
    await SuspensionModel.validateUpdate(newSuspensionData);

    const updatedSuspension = await SuspensionModel.findByIdAndUpdate(
      suspensionId,
      newSuspensionData,
      { new: true }
    );

    if (updatedSuspension === null) throw createSuspensionNotFoundError(suspensionId);

    res.status(200).json(updatedSuspension)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const suspensionId = req.params.id;
  const { label } = req.body;
  const newSuspensionData = { label };

  try {
    SuspensionModel.validateNew(newSuspensionData);

    const foundSuspension = await SuspensionModel.findByIdAndUpdate(
      suspensionId,
      newSuspensionData, { new: true, runValidators: true }
    );

    if (!foundSuspension) throw createSuspensionNotFoundError(suspensionId);

    res.status(200).json(foundSuspension)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const suspensionId = req.params.id;

  try {
    const deletedSuspension = await SuspensionModel.findByIdAndDelete(suspensionId);
    if (deletedSuspension === null) throw createSuspensionNotFoundError(suspensionId);

    res.status(200).json(deletedSuspension);
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
