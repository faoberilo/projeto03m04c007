import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, isNumber, IsNumber } from "class-validator";


export class CreateProductDto{
    @IsString({message:"Informe um nome válido"})
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    imageUrl: string;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    type: string;

    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    @IsNumber()
    price: number;

    @IsString()
    @IsNotEmpty({message:"Esse campo nao pode ser vazio!!!"})
    @ApiProperty()
    storyline: string;


    
}