const { Router } = require('express');
const {
  auth,
  login,
  register,
  checkEmail,
} = require('../controllers/auth-controller');
const { requireAuth } = require('../middleware/auth-middleware');

const authRouter = Router();

authRouter.post('/', requireAuth, auth)

authRouter.post('/login', login);

authRouter.post('/register', register);

authRouter.post('/check-email', checkEmail);

module.exports = authRouter;
