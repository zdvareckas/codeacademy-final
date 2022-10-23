const createSizeViewModel = (sizesData) => ({
  id: sizesData._id,
  label: sizesData.label,
});

module.exports = createSizeViewModel;
