import { User } from "@prisma/client";
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    user: User;
}
