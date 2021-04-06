import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../types';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../services/logger';

export const getAllMessages = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const prisma = new PrismaClient();
  try {
    const messages = await prisma.message.findMany();
    res.json(messages);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      logger.error({ message: 'Internal Server Error', extra: error.stack });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
