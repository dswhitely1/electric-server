import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { registerValidation } from './middleware/registerValidation';
import { PrismaClient } from '@prisma/client';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { errors, isValid } = registerValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const prisma = new PrismaClient();
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res
        .status(400)
        .json({ username: 'Username has already been taken' });
    }
    const password = bcrypt.hashSync(req.body.password, 10);
    await prisma.user.create({ data: { username, password } });
    return res
      .status(201)
      .json({ message: `${username} was created successfully.` });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
