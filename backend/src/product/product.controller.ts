import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('create')
  @ApiOperation({
    summary: 'Criar um produto'
  })
  create(@Body() data:CreateProductDto):Promise<Product>{
    return this.service.create(data);
  }

  @Get('findMany')
  @ApiOperation({
    summary: 'Listar todos os produtos cadastrados'
  })
  findMany():Promise<Product[]>{
    return this.service.findMany();
  }

 
  @Get('find/:id')
  @ApiOperation({
    summary: 'Lista um produto pelo id'
  })
  async findUnique(@Param('id') id:string):Promise<Product>{
    return this.service.findUnique(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deleta um produto pelo id'
  })
  delete(@Param('id') id:string):Promise<{message:string}>{
    return this.service.delete(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Put('update/:id')
  @ApiOperation({
    summary: 'Altera um produto pelo id'
  })
  update(@Param('id') id:string, @Body() data:UpdateProductDto):Promise<Product>{
    return this.service.update(id,data);
  }
}
