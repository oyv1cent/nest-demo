import { SignService } from './sign.service';
import { Response } from 'express';
export declare class SignController {
    private signService;
    constructor(signService: SignService);
    login(params: any, res: Response): Promise<any>;
}
