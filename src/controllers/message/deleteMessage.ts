import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const deleteMessage = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const id = parseInt(req.params.id);
  const prisma = new PrismaClient();
  try {
    await prisma.message.delete({ where: { id } });
    res.status(204).json({ message: 'Deleted' });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
