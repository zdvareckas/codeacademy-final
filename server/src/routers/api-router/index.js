const { Router } = require('express');
const bikesRouter = require('./bikes-router');
const categoriesRouter = require('./categories-router');
const equipmentsRouter = require('./equipment-router');
const materialsRouter = require('./materials-router');
const sizesRouter = require('./sizes-router');
const suspensionsRouter = require('./suspensions-router');
const typesRouter = require('./types-router');
const usersRouter = require('./users-router');

const apiRouter = Router();

apiRouter.use('/bikes', bikesRouter);
apiRouter.use('/equipments', equipmentsRouter);
apiRouter.use('/suspensions', suspensionsRouter);
apiRouter.use('/materials', materialsRouter);
apiRouter.use('/sizes', sizesRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/types', typesRouter);
apiRouter.use('/categories', categoriesRouter);

module.exports = apiRouter;
