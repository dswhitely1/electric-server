import { RequestWithUser } from '../../types';
import { NextFunction, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../services/logger';

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
    if (process.env.NODE_ENV === 'development') {
      logger.error({ message: 'Internal Server Error', extra: error.stack });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
