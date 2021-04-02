import jwt from 'jsonwebtoken';

type User = {
  id: number;
  username: string;
  role: string;
};

export const generateToken = (user: User) => {
  const payload = {
    sub: user.id,
    role: user.role,
  };
  const {
    JWT_SECRET = `Shh, it's a secret`,
    JWT_EXPIRES_IN = '1d',
  } = process.env;
  const options = { expiresIn: JWT_EXPIRES_IN };
  return jwt.sign(payload, JWT_SECRET, options);
};
