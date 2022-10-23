const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
} = require('../../controllers/materials-controller');

const materialsRouter = Router();

materialsRouter.get('/', fetchAll);
materialsRouter.get('/:id', fetch);
materialsRouter.post('/', create);
materialsRouter.put('/:id', replace);
materialsRouter.patch('/:id', update);
materialsRouter.delete('/:id', remove);

module.exports = materialsRouter;
