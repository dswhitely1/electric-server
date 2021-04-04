import { PrismaClient, User, Message } from '@prisma/client';

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

  async createUser(newUser: { username: string; password: string }) {
    await this.prisma.user.create({ data: { ...newUser } });
  }

  getAllMessages() {
    return this.prisma.message.findMany();
  }

  markMessageRead(id: number) {
    this.prisma.message.update({ where: { id }, data: { read: true } });
  }

  deleteMessage(id: number) {
    this.prisma.message.delete({ where: { id } });
  }

  findMessage(id: number): Promise<Message | null> {
    return this.prisma.message.findUnique({ where: { id } });
  }

  createMessage(newMessage: {
    firstName: string;
    lastName: string;
    subject: string;
    message: string;
    contact: string;
  }) {
    this.prisma.message.create({ data: { ...newMessage } });
  }
}

export default new PrismaStore(prismaClient);
