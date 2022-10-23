
const createUserViewModel = (userDoc) => ({
  id: userDoc._id.toString(),
  email: userDoc.email,
  role: userDoc.role,
  img: userDoc.img,
  fullname: userDoc.fullname,
  createdAt: userDoc.createdAt,
  updatedAt: userDoc.updatedAt,
});

module.exports = createUserViewModel;
