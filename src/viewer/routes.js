const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Viewer API');
});

module.exports = router;
