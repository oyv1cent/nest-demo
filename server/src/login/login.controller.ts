import { HttpCode, Res } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() params, @Res() res: Response): Promise<any> {
    return this.loginService.login(params, res);
  }
}
