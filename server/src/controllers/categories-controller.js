const CategoryModel = require('../model/category-model');
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');

const createCategoryNotFoundError = (categoryId) => createNotFoundError(`Category #${categoryId} not found`);

const fetchAll = async (req, res) => {

  try {
    const categoryDocuments = await CategoryModel.find()

    res.status(200).json(categoryDocuments)
  } catch (err) { sendErrorResponse(err, res) }
};

const fetch = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const foundCategory = await CategoryModel.findById(categoryId)

    if (foundCategory === null) throw createCategoryNotFoundError(categoryId);

    res.status(200).json(foundCategory)
  } catch (err) { sendErrorResponse(err, res) }
};

const create = async (req, res) => {
  const newCategoryData = req.body;
  try {
    CategoryModel.validateNew(newCategoryData);

    const newCategory = await CategoryModel.create(newCategoryData)

    res.status(201).json(newCategory)
  } catch (err) { sendErrorResponse(err, res) }
};

const update = async (req, res) => {
  const categoryId = req.params.id;
  const { label } = req.body;

  const newCategoryData = { label };

  try {
    await CategoryModel.validateUpdate(newCategoryData);

    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      newCategoryData,
      { new: true }
    );

    if (updatedCategory === null) throw createCategoryNotFoundError(categoryId);

    res.status(200).json(updatedCategory)

  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const categoryId = req.params.id;
  const { label } = req.body;
  const newCategoryData = { label };

  try {
    CategoryModel.validateNew(newCategoryData);

    const foundCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      newCategoryData, { new: true, runValidators: true }
    );

    if (!foundCategory) throw createCategoryNotFoundError(categoryId);

    res.status(200).json(foundCategory)

  } catch (err) { sendErrorResponse(err, res) }
};

const remove = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    if (deletedCategory === null) throw createCategoryNotFoundError(categoryId);

    res.status(200).json(deletedCategory);
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
