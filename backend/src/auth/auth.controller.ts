import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './dto/login.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import AuthUser from './auth-user.decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private  service: AuthService) {}
  
  @ApiTags('auth')
  @Post('login')
  @ApiOperation({
    summary:'Fazer login e gerar token'
  })
  login(@Body() data:LoginDto):Promise<AuthResponse>{
    return this.service.login(data);
  }

  @UseGuards(AuthGuard())
  @ApiTags('auth')
  @Get('profile')
  @ApiOperation({
    summary:'Retorna usuário logado'
  })
  @ApiBearerAuth()
  profile(@AuthUser() user:User){
    return user;
  }
}
