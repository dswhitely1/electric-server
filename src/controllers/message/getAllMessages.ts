import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../types';
import prismaStore from '../../store/prismaStore';

export const getAllMessages = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  try {
    const messages = await prismaStore.getAllMessages();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
