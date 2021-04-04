import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import prismaStore from '../../store/prismaStore';

export const markMessageRead = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id);
    await prismaStore.markMessageRead(id);
    res.status(202).json({ message: 'Accepted' });
  } catch (error) {
    next(error);
  }
};
