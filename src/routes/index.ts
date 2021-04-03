import authRoutes from './auth';
import { Request, Response } from 'express';

export default [
  ...authRoutes,
  {
    path: '/_health',
    method: 'get',
    handler: (req: Request, res: Response) => res.json({ message: 'Alive' }),
  },
];
