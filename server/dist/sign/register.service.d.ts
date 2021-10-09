import { PrismaService } from '../prisma.service';
import { Response } from 'express';
export declare class RegisterService {
    private prisma;
    constructor(prisma: PrismaService);
    findUserExistByPhone(phone: string): Promise<boolean>;
    register(params: any, res: Response): Promise<any>;
}
