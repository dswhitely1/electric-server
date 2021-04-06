import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../services/logger';

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
    if (process.env.NODE_ENV === 'development') {
      logger.error({ message: 'Internal Server Error', extra: error.stack });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
