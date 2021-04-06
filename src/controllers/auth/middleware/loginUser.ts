import { NextFunction, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { RequestWithUser } from '../../../types';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../../services/logger';

export const loginUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'Authorization Header Missing' });
  }
  const [username, password] = Buffer.from(
    authorization.split(' ')[1],
    'base64',
  )
    .toString('ascii')
    .split(':');
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res
        .status(401)
        .json({ username: 'Invalid username and/or password' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ username: 'Invalid username and/or password' });
    }
    req.user = user;
    await prisma.user.update({
      where: { id: user.id },
      data: { updatedAt: new Date() },
    });
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
