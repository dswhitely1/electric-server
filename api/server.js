const express = require('express');
const serverMiddleware = require('./middleware/serverMiddleware');
const serverRoutes = require('./routes/routes.index');

const server = express();
serverMiddleware(server);
serverRoutes(server);

module.exports = server;
