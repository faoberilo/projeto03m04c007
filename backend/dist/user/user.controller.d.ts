import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Product, User } from '@prisma/client';
export declare class UserController {
    private service;
    constructor(service: UserService);
    create(data: CreateUserDto): Promise<User>;
    delete(user: User): Promise<{
        message: string;
    }>;
    update(user: User, data: UpdateUserDto): Promise<User>;
    get(user: User): Promise<User>;
    addList(user: User, productId: string): Promise<User>;
    deleteList(user: User, productId: string): Promise<User>;
    cartList(user: User): Promise<Product[]>;
}
