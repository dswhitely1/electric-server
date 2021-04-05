import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const markMessageRead = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const prisma = new PrismaClient();
  try {
    const id = parseInt(req.params.id);
    await prisma.message.update({ where: { id }, data: { read: true } });
    res.status(202).json({ message: 'Accepted' });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
