import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
      ) {}
    
      async findAll(): Promise<User[]> {
        return this.userModel.findAll();
      }
    
      async findOne(id: string): Promise<User> {
        return this.userModel.findOne({
          where: {
            id,
          },
        });
      }
    
      async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
      }

      async create(): Promise<User> {
        return this.userModel.create({
            firstName:"zhangsan",
            lastName:"尼古拉斯"
        });
      }
}
