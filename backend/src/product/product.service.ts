import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private database:PrismaService){}

    async create(data:CreateProductDto): Promise<Product>{
        const nameExists = await this.database.product.findUnique({
            where: {name:data.name},
        });
        if (nameExists){
            throw new ConflictException("Produto já cadastrado!!!");
        }
        const product = await this.database.product.create({
            data,   
        });
        return product;
    }

    async delete(id:string):Promise<{message: string}>{
        const product = await this.database.product.findUnique({
            where: {id},
        });
        if(!product){
            throw new NotFoundException('Id Nao Encontrado');
        }
        await this.database.product.delete({
            where: {id},
          });
          return {
            message: 'Produto deletado com sucesso',
          };
    }

    async update(productId: string, data: UpdateProductDto): Promise<Product> {
        const productUpdate = await this.database.product.update({
            data: data,
            where: { id: productId },
        });
        return productUpdate;      
   }

    async findMany():Promise<Product[]>{
        const products = await this.database.product.findMany();
        return products;
    }

    async findUnique(id:string):Promise<Product>{
        const product = await this.database.product.findUnique({
            where: {id},
        });
        if(!product){
            throw new NotFoundException('Id Nao Encontrado');
        }
        return product;
    }
}
