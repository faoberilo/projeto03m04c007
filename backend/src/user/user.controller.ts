import { Body, Controller, Post, Delete, UseGuards, Put, Get, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Product, User } from '@prisma/client';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';


@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Cria um usuario'
  })
  create (@Body() data: CreateUserDto): Promise<User>{
    return this.service.create(data);

  }

  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Deleta um usuário logado'
  })
  @Delete('delete/')
  @ApiBearerAuth()
  delete(@AuthUser() user:User):Promise <{message:string}>{
        return this.service.delete(user);
    }

  @UseGuards(AuthGuard())
  @ApiOperation({
      summary: 'Atualiza um usuário logado'
    })
  @Put('update/')
  @ApiBearerAuth()
    update(@AuthUser() user:User, @Body() data: UpdateUserDto):Promise <User>{
          return this.service.update(user, data);
      }
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Ler um usuário logado'
  })
  @Get('get/')
  @ApiBearerAuth()
  get(@AuthUser() user:User):Promise <User>{
        return this.service.getUser(user);
  }

  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Adicionar um produto no carrinho do usuário logado'
  })
  @Patch('addList/:id')
  @ApiBearerAuth()
  addList(@AuthUser() user: User, @Param('id') productId: string):Promise<User> {
    return this.service.addList(user, productId);
  }

  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Deleta um produto do carrinho do usuário logado'
  })
  @Patch('deleteList/:id')
  @ApiBearerAuth()
  deleteList(@AuthUser() user: User, @Param('id') productId: string):Promise<User> {
    return this.service.deleteList(user, productId);
  }
  
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Mostra os produtos do carrinho do usuário logado'
  })
  @Get('seeList/')
  @ApiBearerAuth()
  cartList(@AuthUser() user: User):Promise <Product[]> {
    return this.service.seeList(user);
  }  
}
