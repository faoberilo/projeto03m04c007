import { Injectable, ConflictException, NotFoundException} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Product} from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private db:PrismaService){}

    async create (data:CreateUserDto):Promise<User> {
        const userExists = await this.db.user.findFirst({
            where: {
                OR: [
                    {
                        email:data.email,
                    },
                    {
                        nickname:data.nickname,
                    },
                ],
            },
        });
        if(userExists){
            throw new ConflictException("Dado já cadastrado!!!");
        } 
        
        if(data.password !== data.passwordConfirmation){
            throw new ConflictException("Senhas não conferem!!!")
        }

        delete data.passwordConfirmation;

        const hashedPassword = await bcrypt.hash(data.password,10);
        const user = await this.db.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
        delete user.password;
        return user;      
   }

   async delete(user: User): Promise<{ message: string }> {
    const userDelete = await this.db.user.findUnique({
      where: { id: user.id },
    });

    if (!userDelete) {
      throw new NotFoundException('Usuário não foi logado');
    } else {
      await this.db.user.delete({
        where: { id: user.id },
      });
    }
    return {
      message: 'Usuário deletado com sucesso',
    };
    }

    async update(user: User, data: UpdateUserDto): Promise<User> {
        const userUpdateExists = await this.db.user.findFirst({
            where: {
                OR: [
                    {
                        email:data.email,
                    },
                    {
                        nickname:data.nickname,
                    },
                ],
            },
        });
        if(userUpdateExists){
            throw new ConflictException("Dado já cadastrado!!!");
        } 

      if(data.password !== data.passwordConfirmation){
          throw new ConflictException("Senhas não conferem!!!")
      }

      delete data.passwordConfirmation;

      const hashedPassword = await bcrypt.hash(data.password,10);
      const userUpdate = await this.db.user.update({
          data: {
              ...data,
              password: hashedPassword,
          },
          where: { id: user.id },
      });
      delete userUpdate.password;
      return userUpdate;      
 }

      async getUser(user:User):Promise<User>{
        const userGet = await this.db.user.findUnique({
          where: { id: user.id }
        });
        delete userGet.password;
        return userGet;

      }

      async addList (user: User, productId: string):Promise<User>{
        const product = await this.db.product.findUnique({
            where: {id:productId},
        });
        if(!product){
            throw new NotFoundException("Produto não encontrado!!!")
        }
        const userList = await this.db.user.update({
            where: {id: user.id},
            data: {
                products:{
                    connect:{
                        id:product.id,
                    },
                },
            },
            include:{
                products: true,
            },
        });
        delete userList.password;
        return userList;
    }

    async deleteList (user: User, productId: string):Promise<User>{
      const product = await this.db.product.findUnique({
          where: {id:productId},
      });
      if(!product){
          throw new NotFoundException("Produto não encontrado!!!")
      }
      const userList = await this.db.user.update({
          where: {id: user.id},
          data: {
              products:{
                  disconnect:{
                      id:product.id,
                  },
              },
          },
          include:{
              products: true,
          },
      });
      delete userList.password;
      return userList;
  }

  async seeList(user: User): Promise<Product[]> {
    const userBuy = await this.db.user.findUnique({
      where: { id: user.id },
      include: {
        products: true,
      },
    });

    const userCart = userBuy.products;
    return userCart;
  }
}