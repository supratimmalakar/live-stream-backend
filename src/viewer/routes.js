const express = require('express');

const controller = require('./controller/index');
const Stream = require('../../db/StreamModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Viewer API');
});

router.get('/streams', async (req, res) => {
  const streams = await Stream.find();
  console.log(streams);
  res.status(200).json(streams);
})

module.exports = router;
