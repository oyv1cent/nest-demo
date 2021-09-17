import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<any> {
    return this.prisma.demo.findMany({});
  }

  async createUser(): Promise<any> {
    return this.prisma.demo.create({
      data: {
        title: 'a',
        author: 'asd',
      },
    });
  }

  async updateUser(): Promise<any> {
    return this.prisma.demo
      .update({
        where: {
          id: 1,
        },
        data: {
          author: 'asds',
        },
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }

  async deleteUser(): Promise<any> {
    return this.prisma.demo
      .delete({
        where: {
          id: 1,
        },
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }
}
