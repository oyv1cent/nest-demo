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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const lodash_1 = require("lodash");
let RegisterService = class RegisterService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUserExistByPhone(phone) {
        const result = await this.prisma.user.findFirst({
            where: {
                phone,
            },
        });
        return !lodash_1.isEmpty(result);
    }
    async register(params, res) {
        if (await this.findUserExistByPhone(params.phone)) {
            res.status(common_1.HttpStatus.FORBIDDEN).send();
            return;
        }
        const result = await this.prisma.user.create({
            data: {
                name: params.name,
                phone: params.phone,
                password: params.password,
            },
        });
        if (lodash_1.isEmpty(result)) {
            return res.status(common_1.HttpStatus.FORBIDDEN).send();
        }
        else {
            return res.status(common_1.HttpStatus.CREATED).send();
        }
    }
};
__decorate([
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RegisterService.prototype, "register", null);
RegisterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=sign.service.js.map