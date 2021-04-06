import { NextFunction, Request, Response } from 'express';
import { newMessageValidation } from '.';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../services/logger';

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { errors, isValid } = newMessageValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const prisma = new PrismaClient();
  try {
    await prisma.message.create({ data: { ...req.body } });
    res.status(201).json({ message: 'Message saved' });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      logger.error({ message: 'Internal Server Error', extra: error.stack });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
