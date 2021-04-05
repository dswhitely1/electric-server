import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../types';
import { PrismaClient } from '@prisma/client';

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
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
