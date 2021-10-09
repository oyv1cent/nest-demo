import { PrismaService } from '../prisma.service';
import { Response } from 'express';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    login(params: any, res: Response): Promise<any>;
}
