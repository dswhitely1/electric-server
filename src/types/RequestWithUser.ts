import { User } from '@prisma/client';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: Pick<User, 'id' | 'role' | 'username' | 'updatedAt'>;
}
