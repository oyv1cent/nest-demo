import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  async getAllUsers(): Promise<any> {
    return this.todoService.getAllUsers();
  }

  @Post('post')
  async createUser(): Promise<any> {
    return this.todoService.createUser();
  }

  @Put('update')
  async updateUser(): Promise<any> {
    return this.todoService.updateUser();
  }

  @Delete('')
  async deleteUser(): Promise<any> {
    return this.todoService.deleteUser();
  }
}
