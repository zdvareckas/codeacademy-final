const BikeModel = require('../model/bike-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const { removeEmptyProps } = require('../helpers/index')

const createBikeNotFoundError = (bikeId) => createNotFoundError(`Bike #${bikeId} not found`);

const fetchAll = async (req, res) => {
  const { expand } = req.query;

  try {

    const bikeDocuments = expand === 'all'
      ? await BikeModel.find()
        .populate('suspensionId')
        .populate('materialId')
        .populate('sizeId')
        .populate('typeId')
      : await BikeModel.find()

    res.status(200).json(bikeDocuments)

  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const bikeId = req.params.id;
  const { expand } = req.query;

  try {
    const foundBike = expand === 'all'
      ? await BikeModel.find()
        .populate('suspensionId')
        .populate('materialId')
        .populate('sizeId')
        .populate('typeId')
      : await BikeModel.find()

    if (foundBike === null) throw createBikeNotFoundError(bikeId);

    res.status(200).json(foundBike)
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newBikeData = req.body;
  try {
    BikeModel.validateNew(newBikeData);

    const newBike = await BikeModel.create(newBikeData)

    res.status(201).json(newBike)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const bikeId = req.params.id;
  const {
    title,
    description,
    price,
    images,
    sizeId,
    materialId,
    typeId,
    suspensionId } = req.body;

  const newBikeData = removeEmptyProps({
    title,
    description,
    price,
    images,
    sizeId,
    materialId,
    typeId,
    suspensionId
  });

  try {
    await BikeModel.validateUpdate(newBikeData);

    const updatedBike = await BikeModel.findByIdAndUpdate(
      bikeId,
      newBikeData,
      { new: true }
    );

    if (updatedBike === null) throw createBikeNotFoundError(bikeId);

    res.status(200).json(updatedBike)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const bikeId = req.params.id;
  const {
    title,
    description,
    price,
    images,
    sizeId,
    materialId,
    typeId,
    suspensionId } = req.body;
  const newBikeData = {
    title,
    description,
    price,
    images,
    sizeId,
    materialId,
    typeId,
    suspensionId
  };

  try {
    BikeModel.validateNew(newBikeData);

    const foundBike = await BikeModel.findByIdAndUpdate(
      bikeId,
      newBikeData, { new: true, runValidators: true }
    );

    if (!foundBike) throw createBikeNotFoundError(bikeId);

    res.status(200).json(foundBike)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const bikeId = req.params.id;

  try {
    const deletedBike = await BikeModel.findByIdAndDelete(bikeId);
    if (deletedBike === null) throw createBikeNotFoundError(bikeId);

    res.status(200).json(deletedBike);
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
