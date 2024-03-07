const express = require('express');
const bodyParser = require('body-parser');
const expressip = require('express-ip');
const cors = require('cors');

const broadcasterRouter = require('./src/broadcaster/routes');
const viewerRouter = require('./src/viewer/routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressip().getIpInfoMiddleware);

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the API');
})

app.use('/broadcaster', broadcasterRouter);
app.use('/viewer', viewerRouter);

module.exports = app;
