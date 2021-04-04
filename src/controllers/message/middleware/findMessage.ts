import { RequestWithUser } from '../../../types';
import { NextFunction, Response } from 'express';
import prismaStore from '../../../store/prismaStore';

export const findMessage = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const id = parseInt(req.params.id);
  try {
    const message = await prismaStore.findMessage(id);
    if (!message) {
      return res
        .status(404)
        .json({ message: `Message with ${id} was not found` });
    }
    next();
  } catch (error) {
    next(error);
  }
};
