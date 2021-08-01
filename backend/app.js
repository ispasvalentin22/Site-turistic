const express = require('express');

const db = require('./connectDb');
const api = require('./src/index');
const NotFoundError = require('./src/errors/notFoundError');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(express.json());

db.connectDB();

app.use('/api', api);

app.all('*', (req, res) => {
  throw new NotFoundError('Route does not exist');
});

app.use(errorHandler);

module.exports = app;
