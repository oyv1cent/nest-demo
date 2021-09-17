import { PrismaService } from '../prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<any>;
    createUser(): Promise<any>;
    updateUser(): Promise<any>;
    deleteUser(): Promise<any>;
}
