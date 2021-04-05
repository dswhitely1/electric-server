import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './routes';
import errorHandlers from './middleware/errorHandling';

const server = express();
applyMiddleware(middleware, server);
applyRoutes(routes, server);
applyMiddleware(errorHandlers, server);
export default server;
