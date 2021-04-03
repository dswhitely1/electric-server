import { PrismaClient, User } from '@prisma/client';

const prismaClient = new PrismaClient();
type PrismaClientType = typeof prismaClient;
class PrismaStore {
  constructor(private prisma: PrismaClientType) {}

  updateLogin({ id }: User): void {
    this.prisma.user.update({
      where: { id },
      data: { updatedAt: new Date() },
    });
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { username } });
  }

  createUser(newUser: { username: string; password: string }) {
    this.prisma.user.create({ data: { ...newUser } });
  }
}

export default new PrismaStore(prismaClient);
