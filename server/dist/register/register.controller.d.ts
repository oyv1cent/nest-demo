import { RegisterService } from './register.service';
import { Response } from 'express';
export declare class RegisterController {
    private registerService;
    constructor(registerService: RegisterService);
    login(params: any, res: Response): Promise<any>;
}
