import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
    if (user) {
      return res
        .status(400)
        .json({ username: 'Username has already been taken' });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    return res
      .status(201)
      .json({ message: `${req.body.username} was created successfully.` });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
