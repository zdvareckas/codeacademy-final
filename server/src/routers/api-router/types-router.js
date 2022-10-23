const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
} = require('../../controllers/types-controller');

const typesRouter = Router();

typesRouter.get('/', fetchAll);
typesRouter.get('/:id', fetch);
typesRouter.post('/', create);
typesRouter.put('/:id', replace);
typesRouter.patch('/:id', update);
typesRouter.delete('/:id', remove);

module.exports = typesRouter;
