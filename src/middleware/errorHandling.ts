import { Express, NextFunction, Request, Response } from 'express';
import * as ErrorHandler from '../utils';

export const handleClientError = (router: Express) => {
  router.use((err: any, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

export const handleServerError = (router: Express) => {
  router.use((err: Error, req: Request, res: Response) =>
    ErrorHandler.serverError(err, res),
  );
};
export default [handleClientError, handleServerError];
