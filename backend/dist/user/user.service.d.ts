import { PrismaService } from 'src/prisma.service';
import { User, Product } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    delete(user: User): Promise<{
        message: string;
    }>;
    update(user: User, data: UpdateUserDto): Promise<User>;
    getUser(user: User): Promise<User>;
    addList(user: User, productId: string): Promise<User>;
    deleteList(user: User, productId: string): Promise<User>;
    seeList(user: User): Promise<Product[]>;
}
