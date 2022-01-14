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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        const userExists = await this.db.user.findFirst({
            where: {
                OR: [
                    {
                        email: data.email,
                    },
                    {
                        nickname: data.nickname,
                    },
                ],
            },
        });
        if (userExists) {
            throw new common_1.ConflictException("Dado já cadastrado!!!");
        }
        if (data.password !== data.passwordConfirmation) {
            throw new common_1.ConflictException("Senhas não conferem!!!");
        }
        delete data.passwordConfirmation;
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.db.user.create({
            data: Object.assign(Object.assign({}, data), { password: hashedPassword }),
        });
        delete user.password;
        return user;
    }
    async delete(user) {
        const userDelete = await this.db.user.findUnique({
            where: { id: user.id },
        });
        if (!userDelete) {
            throw new common_1.NotFoundException('Usuário não foi logado');
        }
        else {
            await this.db.user.delete({
                where: { id: user.id },
            });
        }
        return {
            message: 'Usuário deletado com sucesso',
        };
    }
    async update(user, data) {
        const userUpdateExists = await this.db.user.findFirst({
            where: {
                OR: [
                    {
                        email: data.email,
                    },
                    {
                        nickname: data.nickname,
                    },
                ],
            },
        });
        if (userUpdateExists) {
            throw new common_1.ConflictException("Dado já cadastrado!!!");
        }
        if (data.password !== data.passwordConfirmation) {
            throw new common_1.ConflictException("Senhas não conferem!!!");
        }
        delete data.passwordConfirmation;
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userUpdate = await this.db.user.update({
            data: Object.assign(Object.assign({}, data), { password: hashedPassword }),
            where: { id: user.id },
        });
        delete userUpdate.password;
        return userUpdate;
    }
    async getUser(user) {
        const userGet = await this.db.user.findUnique({
            where: { id: user.id }
        });
        delete userGet.password;
        return userGet;
    }
    async addList(user, productId) {
        const product = await this.db.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException("Produto não encontrado!!!");
        }
        const userList = await this.db.user.update({
            where: { id: user.id },
            data: {
                products: {
                    connect: {
                        id: product.id,
                    },
                },
            },
            include: {
                products: true,
            },
        });
        delete userList.password;
        return userList;
    }
    async deleteList(user, productId) {
        const product = await this.db.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException("Produto não encontrado!!!");
        }
        const userList = await this.db.user.update({
            where: { id: user.id },
            data: {
                products: {
                    disconnect: {
                        id: product.id,
                    },
                },
            },
            include: {
                products: true,
            },
        });
        delete userList.password;
        return userList;
    }
    async seeList(user) {
        const userBuy = await this.db.user.findUnique({
            where: { id: user.id },
            include: {
                products: true,
            },
        });
        const userCart = userBuy.products;
        return userCart;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map