const express = require('express');

const routes = require('../routes/v1');
const error = require('../middlewares/error');
const middlewaresConfig = require('./middlewares')
import addSecurityMiddleware from '../middlewares/security';

/**
* Express instance
* @public
*/
const app = express();

// Security middleware.
addSecurityMiddleware(app);

/**
* Middlewares
*/
middlewaresConfig(app);

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
