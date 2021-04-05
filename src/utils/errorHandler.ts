import { NextFunction, Response } from 'express';
import { HTTPClientError } from '.';
import { logger } from '../services';

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    const { message, statusCode } = err;
    logger.warn({ message });
    res.status(statusCode).json({ message });
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ message: 'Internal Server Error' });
  } else {
    logger.warn({ message: 'Internal Server Error', extra: err.stack });
    res.status(500).json({ message: err.stack });
  }
};
