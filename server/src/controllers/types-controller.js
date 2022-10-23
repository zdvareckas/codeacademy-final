const TypeModel = require('../model/type-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');

const createSuspensionNotFoundError = (typeId) => createNotFoundError(`Type #${typeId} not found`);

const fetchAll = async (req, res) => {

  try {
    const typesDocuments = await TypeModel.find()

    res.status(200).json(typesDocuments)
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const typeId = req.params.id;

  try {
    const foundType = await TypeModel.findById(typeId)

    if (foundType === null) throw createSuspensionNotFoundError(typeId);

    res.status(200).json(foundType)
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newTypeData = req.body;
  try {
    TypeModel.validateNew(newTypeData);

    const newType = await TypeModel.create(newTypeData)

    res.status(201).json(newType)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const typeId = req.params.id;
  const { label } = req.body;

  const newTypeData = { label };

  try {
    await TypeModel.validateUpdate(newTypeData);

    const updatedType = await TypeModel.findByIdAndUpdate(
      typeId,
      newTypeData,
      { new: true }
    );

    if (updatedType === null) throw createSuspensionNotFoundError(typeId);

    res.status(200).json(updatedType)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const typeId = req.params.id;
  const { label } = req.body;
  const newTypeData = { label };

  try {
    TypeModel.validateNew(newTypeData);

    const foundType = await TypeModel.findByIdAndUpdate(
      typeId,
      newTypeData, { new: true, runValidators: true }
    );

    if (!foundType) throw createSuspensionNotFoundError(typeId);

    res.status(200).json(foundType)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const typeId = req.params.id;

  try {
    const deletedType = await TypeModel.findByIdAndDelete(typeId);
    if (deletedType === null) throw createSuspensionNotFoundError(typeId);

    res.status(200).json(deletedType);
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
