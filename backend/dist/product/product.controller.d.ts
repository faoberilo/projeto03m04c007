import { ProductService } from './product.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    create(data: CreateProductDto): Promise<Product>;
    findMany(): Promise<Product[]>;
    findUnique(id: string): Promise<Product>;
    delete(id: string): Promise<{
        message: string;
    }>;
    update(id: string, data: UpdateProductDto): Promise<Product>;
}
