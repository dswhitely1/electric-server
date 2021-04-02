import express from 'express';
import { applyMiddleware } from './utils';
import middleware from './middleware';
import routes from './routes';

const server = express();
applyMiddleware(middleware, server);
server.use('/api', routes);
export default server;
