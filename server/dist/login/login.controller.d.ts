import { LoginService } from './login.service';
import { Response } from 'express';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(params: any, res: Response): Promise<any>;
}
