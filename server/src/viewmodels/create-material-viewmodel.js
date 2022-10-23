const createMaterialViewModel = (materialsData) => ({
  id: materialsData._id,
  label: materialsData.label,
});

module.exports = createMaterialViewModel;
