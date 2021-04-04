import { RequestWithUser } from '../types';
import { NextFunction, Response } from 'express';

export const isAdmin = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Response | void => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
