import unless from 'express-unless';
import { RequestWithUser } from '../types';
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const restricted = () => {
  const authMiddleware = (
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
  ) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(400)
        .json({ message: 'Authorization Header is missing' });
    }
    const token = authorization.split(' ')[1];
    const { JWT_SECRET = "Shh, it's a secret" } = process.env;
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid Token' });
      }
      req.user = <User>decodedToken;
      next();
    });
  };

  authMiddleware.unless = unless;
  return authMiddleware;
};
