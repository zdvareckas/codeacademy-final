const { Router } = require('express');
const {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
} = require('../../controllers/equipments-controller');

const equipmentsRouter = Router();

equipmentsRouter.get('/', fetchAll);
equipmentsRouter.get('/:id', fetch);
equipmentsRouter.post('/', create);
equipmentsRouter.put('/:id', replace);
equipmentsRouter.patch('/:id', update);
equipmentsRouter.delete('/:id', remove);

module.exports = equipmentsRouter;
