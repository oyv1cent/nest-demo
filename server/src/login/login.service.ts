import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { isEmpty } from 'lodash';
import { Response } from 'express';
import { ErrorCode, errorMap } from '../utils/errorMap';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async login(params, @Res() res: Response): Promise<any> {
    const result = await this.prisma.user.findFirst({
      where: {
        name: params.name,
      },
    });
    const verifyPassword = result.password === params.password;
    if (isEmpty(result) || !verifyPassword) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .send(errorMap[ErrorCode.LoginError]);
    }
    return res.status(HttpStatus.OK).send();
  }
}
