import { LoginDto, AuthResponse } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private database;
    private jwt;
    constructor(database: PrismaService, jwt: JwtService);
    login(data: LoginDto): Promise<AuthResponse>;
}
