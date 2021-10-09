import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { isEmpty } from 'lodash';
import { Response } from 'express';
import { ErrorCode, errorMap } from 'src/utils/errorMap';
@Injectable()
export class RegisterService {
  constructor(private prisma: PrismaService) {}

  async findUserExistByPhone(phone: string): Promise<boolean> {
    const result = await this.prisma.user.findFirst({
      where: {
        phone,
      },
    });
    return !isEmpty(result);
  }

  async register(params, @Res() res: Response): Promise<any> {
    if (await this.findUserExistByPhone(params.phone)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .send(errorMap[ErrorCode.RegisterDuplicated]);
    }
    const result = await this.prisma.user.create({
      data: {
        name: params.name,
        phone: params.phone,
        password: params.password,
      },
    });
    if (isEmpty(result)) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(errorMap[ErrorCode.DefaultError]);
    } else {
      return res.status(HttpStatus.CREATED).send();
    }
  }
}
