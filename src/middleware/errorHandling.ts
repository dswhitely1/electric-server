import { RequestWithUser } from '../types';
import { Response } from 'express';
import { Boom } from '@hapi/boom';

export const errorHandling = (
  error: Boom,
  req: RequestWithUser,
  res: Response,
) => {
  const { message = 'Internal Server Error', isBoom, output } = error;
  if (isBoom) {
    return res
      .status(output.statusCode)
      .json({ message, success: false, output });
  }
  return res.status(500).json({ success: false, message });
};
