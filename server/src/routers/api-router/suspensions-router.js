const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
} = require('../../controllers/suspensions-controller');

const suspensionsRouter = Router();

suspensionsRouter.get('/', fetchAll);
suspensionsRouter.get('/:id', fetch);
suspensionsRouter.post('/', create);
suspensionsRouter.put('/:id', replace);
suspensionsRouter.patch('/:id', update);
suspensionsRouter.delete('/:id', remove);

module.exports = suspensionsRouter;
