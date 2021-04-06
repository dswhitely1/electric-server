import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateToken = (user: Pick<User, 'id' | 'role' | 'username'>) => {
  const payload = {
    sub: user.id,
    role: user.role,
    username: user.username,
  };
  const {
    JWT_SECRET = `Shh, it's a secret`,
    JWT_EXPIRES_IN = '1d',
  } = process.env;
  const options = { expiresIn: JWT_EXPIRES_IN };
  return jwt.sign(payload, JWT_SECRET, options);
};
