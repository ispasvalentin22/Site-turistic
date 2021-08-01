const { Router } = require('express');
const apiRouter = new Router();

const userRoutes = require('./routes/userRoutes');

apiRouter.use('/user', userRoutes);

module.exports = apiRouter;
