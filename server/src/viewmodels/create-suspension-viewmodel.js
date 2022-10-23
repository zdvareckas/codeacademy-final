const createSuspensionViewModel = (suspensionData) => ({
  id: suspensionData._id,
  label: suspensionData.label,
});

module.exports = createSuspensionViewModel;
