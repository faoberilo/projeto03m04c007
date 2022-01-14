import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './dto/login.dto';
import { User } from '@prisma/client';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    login(data: LoginDto): Promise<AuthResponse>;
    profile(user: User): User;
}
