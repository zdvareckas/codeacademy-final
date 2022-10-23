const createCategoryViewModel = (categoryData) => ({
  id: categoryData._id,
  label: categoryData.label,
});

module.exports = createCategoryViewModel;
