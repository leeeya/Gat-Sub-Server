const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const env = process.env;

const initLoaders = app => {
  app.use(cors({
    origin: env.ORIGIN_URI,
    credentials: true,
  }));
  app.use(cookieParser());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

module.exports = initLoaders;
