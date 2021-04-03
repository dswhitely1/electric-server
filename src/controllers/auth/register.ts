import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { registerValidation } from './middleware/registerValidation';
import prismaStore from '../../store/prismaStore';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { errors, isValid } = registerValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const user = await prismaStore.getUserByUsername(req.body.username);
    if (user) {
      return res
        .status(400)
        .json({ username: 'Username has already been taken' });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    prismaStore.createUser({
      username: req.body.username,
      password: req.body.password,
    });
    return res
      .status(201)
      .json({ message: `${req.body.username} was created successfully.` });
  } catch (error) {
    next(error);
  }
};
