import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
export declare class ProductService {
    private database;
    constructor(database: PrismaService);
    create(data: CreateProductDto): Promise<Product>;
    delete(id: string): Promise<{
        message: string;
    }>;
    update(productId: string, data: UpdateProductDto): Promise<Product>;
    findMany(): Promise<Product[]>;
    findUnique(id: string): Promise<Product>;
}
