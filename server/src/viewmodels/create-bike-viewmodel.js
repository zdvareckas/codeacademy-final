const createBikeViewmodel = (bikeData) => ({
  id: bikeData._id,
  title: bikeData.title,
  description: bikeData.description,
  price: bikeData.price,
  images: bikeData.images,
  suspension: bikeData.suspensionId,
  type: bikeData.typeId,
  material: bikeData.materialId,
  size: bikeData.sizeId
});

module.exports = createBikeViewmodel;
