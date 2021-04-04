import { NextFunction, Request, Response } from 'express';
import { newMessageValidation } from '.';
import prismaStore from '../../store/prismaStore';

export const createMessage = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { errors, isValid } = newMessageValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    prismaStore.createMessage(req.body);
    res.status(201).json({ message: 'Message saved' });
  } catch (error) {
    next(error);
  }
};
