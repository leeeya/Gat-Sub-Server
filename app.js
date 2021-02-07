const dotenv = require('dotenv');
dotenv.config();

const createError = require('http-errors');
const express = require('express');
const app = express();
const initLoaders = require('./loaders');
const connectSequelize = require('./config/sequelize');

const PATHS = require('./constants/paths');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

initLoaders(app);
connectSequelize();

app.use(PATHS.ROOT, indexRouter);
app.use(PATHS.USERS, usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.error(err);

  err.status
    ? res.status(err.status).json({ result: err.message })
    : res.status(500).json({ result: RESPONSE.INTERNAL_SEVER_ERROR });
});

module.exports = app;
