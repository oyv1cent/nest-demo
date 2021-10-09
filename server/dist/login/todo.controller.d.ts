import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllUsers(): Promise<any>;
    createUser(): Promise<any>;
    updateUser(): Promise<any>;
    deleteUser(): Promise<any>;
}
