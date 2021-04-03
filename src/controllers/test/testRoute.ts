import { Request, Response } from 'express';

export const testRoute = (req: Request, res: Response) => {
  res.json({ message: 'Alive' });
};
