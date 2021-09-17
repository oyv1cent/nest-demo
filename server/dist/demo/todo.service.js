"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TodoService = class TodoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUsers() {
        return this.prisma.user.findMany({});
    }
    async createUser() {
        return this.prisma.user.create({
            data: {
                name: 'Rich',
                email: 'qq@qq.com',
                age: 1,
            },
        });
    }
    async updateUser() {
        return this.prisma.user
            .update({
            where: {
                id: '613f0da700d965df002c993c',
            },
            data: {
                name: 'sadasd',
                age: 121300,
            },
        })
            .catch((e) => {
            console.log(e);
            return e;
        });
    }
    async deleteUser() {
        return this.prisma.user.delete({
            where: {
                id: '613f0da700d965df002c993c',
            },
        });
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map