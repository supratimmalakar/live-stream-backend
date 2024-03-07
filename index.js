const app = require('./app');
const config = require('./config');
const runSocket = require('./socket');
const mongooseConnect = require('./services/mongoose');
const { Server } = require("socket.io");
require('dotenv').config();

const server = require('http').createServer(app);
const io = new Server(server, { 
  path: '/socket',
  cors: {
    origin: '*',
  }
 });

const PORT = process.env.PORT || config.port;
mongooseConnect();
runSocket(io);

server.listen(PORT, () => {
  console.log('server is running on port', server.address().port);
});
