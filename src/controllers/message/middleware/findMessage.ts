import { RequestWithUser } from '../../../types';
import { NextFunction, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../../services/logger';

export const findMessage = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const id = parseInt(req.params.id);
  const prisma = new PrismaClient();
  try {
    const message = await prisma.message.findUnique({ where: { id } });
    if (!message) {
      return res
        .status(404)
        .json({ message: `Message with ${id} was not found` });
    }
    next();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      logger.error({ message: 'Internal Server Error', extra: error.stack });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
