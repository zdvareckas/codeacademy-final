const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  update,
  replace,
  remove
} = require('../../controllers/users-controller');
const { requireAdmin, requireUser } = require('../../middleware/auth-middleware')

const usersRouter = Router();

usersRouter.get('/', requireAdmin, fetchAll);
usersRouter.get('/:id', requireUser, fetch);
usersRouter.post('/', requireAdmin, create);
usersRouter.patch('/:id', requireAdmin, update);
usersRouter.put('/:id', requireAdmin, replace);
usersRouter.delete('/:id', requireAdmin, remove);

module.exports = usersRouter;
