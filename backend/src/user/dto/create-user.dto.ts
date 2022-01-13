import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty, Length } from "class-validator";


export class CreateUserDto{
    @IsString({message:"Informe um nome válido"})
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    name: string;

    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @IsString()
    @ApiProperty()
    nickname: string;

    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @IsString()
    @IsEmail()
    @ApiProperty()
    email:string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    birthdate: string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    imageUrl: string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @Length(6,10,{message:"A senha deve ter entre 6 e 10 caracteres!!!"})
    @ApiProperty()
    password: string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @Length(6,10, {message:"A senha deve ter entre 6 e 10 caracteres!!!"})
    @ApiProperty()
    passwordConfirmation: string;
}