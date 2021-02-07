const express = require('express');
const router = express.Router();
const PATHS = require('./../constants/paths');

router.get(PATHS.ROOT, function(req, res, next) {
  res.status(200).json({
    result: 'ok',
    message: 'connection'
  });
});

module.exports = router;
