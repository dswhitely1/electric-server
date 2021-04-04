import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import prismaStore from '../../store/prismaStore';

export const deleteMessage = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const id = parseInt(req.params.id);
  try {
    await prismaStore.deleteMessage(id);
    res.status(204).json({ message: 'Deleted' });
  } catch (error) {
    next(error);
  }
};
