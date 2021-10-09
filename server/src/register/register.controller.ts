import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
import { Response } from 'express';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
  @Post()
  async login(@Body() params, @Res() res: Response): Promise<any> {
    return this.registerService.register(params, res);
  }
}
