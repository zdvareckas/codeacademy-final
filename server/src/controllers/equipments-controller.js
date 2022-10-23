const EquipmentModel = require('../model/equipment-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const { removeEmptyProps } = require('../helpers/index')

const createEquipmentNotFoundError = (equipmentId) => createNotFoundError(`Equipment #${equipmentId} not found`);

const fetchAll = async (req, res) => {
  const { expand } = req.query;

  try {

    const equipmentDocuments = expand === 'all'
      ? await EquipmentModel.find()
        .populate('sizeId')
        .populate('categoryId')
      : await EquipmentModel.find()

    res.status(200).json(equipmentDocuments)

  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const equipmentId = req.params.id;
  const { expand } = req.query;

  try {
    const foundEquipment = expand === 'all'
      ? await EquipmentModel.find()
        .populate('sizeId')
        .populate('categoryId')
      : await EquipmentModel.find()

    if (foundEquipment === null) throw createEquipmentNotFoundError(equipmentId);

    res.status(200).json(foundEquipment)
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newEquipmentData = req.body;
  try {
    EquipmentModel.validateNew(newEquipmentData);

    const newEquipment = await EquipmentModel.create(newEquipmentData)

    res.status(201).json(newEquipment)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const equipmentId = req.params.id;
  const {
    title,
    description,
    price,
    images,
    sizeId,
    categoryId,
  } = req.body;

  const newEquipmentData = removeEmptyProps({
    title,
    description,
    price,
    images,
    sizeId,
    categoryId
  });

  try {
    await EquipmentModel.validateUpdate(newEquipmentData);

    const updatedEquipment = await EquipmentModel.findByIdAndUpdate(
      equipmentId,
      newEquipmentData,
      { new: true }
    );

    if (updatedEquipment === null) throw createEquipmentNotFoundError(equipmentId);

    res.status(200).json(updatedEquipment)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const equipmentId = req.params.id;
  const {
    title,
    description,
    price,
    images,
    sizeId,
    categoryId,
  } = req.body;

  const newEquipmentData = removeEmptyProps({
    title,
    description,
    price,
    images,
    sizeId,
    categoryId
  });

  try {
    EquipmentModel.validateNew(newEquipmentData);

    const foundEquipment = await EquipmentModel.findByIdAndUpdate(
      equipmentId,
      newEquipmentData, { new: true, runValidators: true }
    );

    if (!foundEquipment) throw createEquipmentNotFoundError(equipmentId);

    res.status(200).json(foundEquipment)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const equipmentId = req.params.id;

  try {
    const deletedEquipment = await EquipmentModel.findByIdAndDelete(equipmentId);
    if (deletedEquipment === null) throw createEquipmentNotFoundError(equipmentId);

    res.status(200).json(deletedEquipment);
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
