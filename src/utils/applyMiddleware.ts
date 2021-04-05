import { Express } from 'express';

type Wrapper = (router: Express) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Express) => {
  middleware.forEach((f) => f(router));
};
