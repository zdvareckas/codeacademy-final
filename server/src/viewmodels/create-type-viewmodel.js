const createTypeViewModel = (typeData) => ({
  id: typeData._id,
  label: typeData.label,
});

module.exports = createTypeViewModel;
