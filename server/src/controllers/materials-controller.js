const MaterialModel = require('../model/material-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const createMaterialViewModel = require('../viewmodels/create-material-viewmodel');

const createMaterialNotFoundError = (materialId) => createNotFoundError(`Material #${materialId} not found`);

const fetchAll = async (req, res) => {

  try {
    const materialDocuments = await MaterialModel.find()

    res.status(200).json(
      materialDocuments.map((x) => createMaterialViewModel(x)))
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const materialId = req.params.id;

  try {
    const foundMaterial = await MaterialModel.findById(materialId)

    if (foundMaterial === null) throw createMaterialNotFoundError(materialId);

    res.status(200).json(createMaterialViewModel(foundMaterial))
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newMaterialData = req.body;
  try {
    MaterialModel.validateNew(newMaterialData);

    const newMaterial = await MaterialModel.create(newMaterialData)

    res.status(201).json(newMaterial)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const materialId = req.params.id;
  const { label } = req.body;

  const newMaterialData = { label };

  try {
    await MaterialModel.validateUpdate(newMaterialData);

    const updatedMaterial = await MaterialModel.findByIdAndUpdate(
      materialId,
      newMaterialData,
      { new: true }
    );

    if (updatedMaterial === null) throw createMaterialNotFoundError(materialId);

    res.status(200).json(updatedMaterial)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const materialId = req.params.id;
  const { label } = req.body;
  const newMaterialData = { label };

  try {
    MaterialModel.validateNew(newMaterialData);

    const foundMaterial = await MaterialModel.findByIdAndUpdate(
      materialId,
      newMaterialData, { new: true, runValidators: true }
    );

    if (!foundMaterial) throw createMaterialNotFoundError(materialId);

    res.status(200).json(foundMaterial)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const materialId = req.params.id;

  try {
    const deletedMaterial = await MaterialModel.findByIdAndDelete(materialId);
    if (deletedMaterial === null) throw createMaterialNotFoundError(materialId);

    res.status(200).json(deletedMaterial);
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
