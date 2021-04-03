import { NextFunction, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { RequestWithUser } from '../../../types';
import prismaStore from '../../../store/prismaStore';

export const loginUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'Authorization Header is missing' });
  }
  const [username, password] = Buffer.from(
    authorization.split(' ')[1],
    'base64',
  )
    .toString('ascii')
    .split(':');
  try {
    const user = await prismaStore.getUserByUsername(username);
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
    prismaStore.updateLogin(user);
    next();
  } catch (error) {
    next(error);
  }
};
