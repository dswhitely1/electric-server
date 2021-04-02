import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/generateToken';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
    if (!user) {
      return res
        .status(401)
        .json({ username: 'Invalid username and/or password' });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res
        .status(401)
        .json({ username: 'Invalid username and/or password' });
    }
    const token = generateToken(user);
    const message = `Welcome back ${user.username}`;
    await prisma.user.update({
      where: { id: user.id },
      data: { updatedAt: new Date() },
    });
    return res.json({ token, message, lastLogin: user.updatedAt });
  } catch (error) {
    next(error);
  } finally {
    await prisma.$disconnect();
  }
};
