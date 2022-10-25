const EquipmentModel = require('../model/equipment-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const { removeEmptyProps } = require('../helpers/index');
const createEquipmentViewmodel = require('../viewmodels/create-equipment-viewmodel');

const createEquipmentNotFoundError = (equipmentId) => createNotFoundError(`Equipment #${equipmentId} not found`);

const fetchAll = async (req, res) => {
  const { expand, id, categoryId, sizeId } = req.query;
  const populatedEquipmentDocuments = expand === 'all';
  const filter = {};

  if (id) filter._id = id;
  if (categoryId) {
    filter.categoryId = categoryId;
  };
  if (sizeId) {
    filter.sizeId = sizeId;
  };

  try {

    const equipmentDocuments = populatedEquipmentDocuments
      ? await EquipmentModel.find(filter)
        .populate('sizeId')
        .populate('categoryId')
      : await EquipmentModel.find(filter)

    res.status(200).json(
      equipmentDocuments.map((x) => createEquipmentViewmodel(x))
    )

  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const equipmentId = req.params.id;
  const { expand } = req.query;

  try {
    const foundEquipment = expand === 'all'
      ? await EquipmentModel.findById(equipmentId)
        .populate('sizeId')
        .populate('categoryId')
      : await EquipmentModel.findById(equipmentId)

    if (foundEquipment === null) throw createEquipmentNotFoundError(equipmentId);

    res.status(200).json(
      createEquipmentViewmodel(foundEquipment)
    )
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const {
    images,
  } = req.body;

  let reformedImages = [];
  if (images !== typeof Array) {
    const imagesArr = images.split('\n');
    reformedImages = imagesArr;
  } else {
    reformedImages = images;
  }

  const newEquipmentData = {
    ...req.body,
    images: reformedImages
  }


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
