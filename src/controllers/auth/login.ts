import { Response } from 'express';
import { generateToken } from '../../utils';
import { RequestWithUser } from '../../types';

export const login = async (req: RequestWithUser, res: Response) => {
  const token = generateToken(req.user);
  const message = `Welcome back ${req.user.username}`;
  res.json({ token, message, lastLogin: req.user.updatedAt });
};
