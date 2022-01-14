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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductService = class ProductService {
    constructor(database) {
        this.database = database;
    }
    async create(data) {
        const nameExists = await this.database.product.findUnique({
            where: { name: data.name },
        });
        if (nameExists) {
            throw new common_1.ConflictException("Produto já cadastrado!!!");
        }
        const product = await this.database.product.create({
            data,
        });
        return product;
    }
    async delete(id) {
        const product = await this.database.product.findUnique({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException('Id Nao Encontrado');
        }
        await this.database.product.delete({
            where: { id },
        });
        return {
            message: 'Produto deletado com sucesso',
        };
    }
    async update(productId, data) {
        const productUpdate = await this.database.product.update({
            data: data,
            where: { id: productId },
        });
        return productUpdate;
    }
    async findMany() {
        const products = await this.database.product.findMany();
        return products;
    }
    async findUnique(id) {
        const product = await this.database.product.findUnique({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException('Id Nao Encontrado');
        }
        return product;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map