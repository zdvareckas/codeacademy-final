const { Router } = require('express');
const {
  auth,
  login,
  register,
  checkEmail,
  updateProfile,
} = require('../controllers/auth-controller');
const { requireAuth } = require('../middleware/auth-middleware');

const authRouter = Router();

authRouter.post('/', requireAuth, auth)

authRouter.post('/login', login);

authRouter.post('/register', register);

authRouter.post('/check-email', checkEmail);

authRouter.patch('/update-profile', requireAuth, updateProfile);

module.exports = authRouter;
