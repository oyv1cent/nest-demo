import { SignService } from './sign.service';
import { Response } from 'express';
export declare class RegisterController {
    private signService;
    constructor(signService: SignService);
    login(params: any, res: Response): Promise<any>;
}
