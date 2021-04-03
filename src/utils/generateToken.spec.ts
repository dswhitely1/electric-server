import { generateToken } from './generateToken';
import { User } from '@prisma/client';

describe('generateToken.ts', () => {
  it('should generate a token based on the user', () => {
    const user: User = {
      id: 1,
      role: 'USER',
      username: 'Test',
      password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const actual = generateToken(user);
    expect(actual).toBeTruthy();
  });
});
