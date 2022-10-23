const createEquipmentViewmodel = (equipmentData) => ({
  id: equipmentData._id,
  title: equipmentData.title,
  description: equipmentData.description,
  price: equipmentData.price,
  images: equipmentData.images,
  size: equipmentData.sizeId,
  category: equipmentData.categoryId
});

module.exports = createEquipmentViewmodel;
