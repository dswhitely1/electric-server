import { NextFunction, Request, Response, Router } from 'express';
import { RequestWithUser } from '../types';

type Handler = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => Promise<void> | void | Promise<Response | undefined>;

export type Route = {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  routes.forEach(({ method, path, handler }) =>
    (router as any)[method](path, handler),
  );
};
