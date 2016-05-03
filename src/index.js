'use strict';
require("babel-register");
const app = require('./apollo-server');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Feathers-Apollo application started on ${app.get('host')}:${port}`)
);
