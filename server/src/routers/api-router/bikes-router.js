const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
} = require('../../controllers/bikes-controller');

const bikesRouter = Router();

bikesRouter.get('/', fetchAll);
bikesRouter.get('/:id', fetch);
bikesRouter.post('/', create);
bikesRouter.put('/:id', replace);
bikesRouter.patch('/:id', update);
bikesRouter.delete('/:id', remove);

module.exports = bikesRouter;
