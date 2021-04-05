import { NextFunction, Request, Response } from 'express';
import { newMessageValidation } from '.';
import { PrismaClient } from '@prisma/client';

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
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
