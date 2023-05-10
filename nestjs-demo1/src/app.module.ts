/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 15:50:14
 * @LastEditTime: 2023-05-10 15:27:12
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { PigsModule } from './pigs/pigs.module';
import { ErrController } from './err/err.controller';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { DogsController } from './feature/dogs/dogs.controller';
import { DogsModule } from './feature/dogs/dogs.module';
import { RabbitsController } from './feature/rabbits/rabbits.controller';
import { RabbitsModule } from './feature/rabbits/rabbits.module';

// Global()，使模块成为全局作用域，而不用引入他们
@Global()
@Module({
  imports: [PigsModule, DogsModule, RabbitsModule],
  controllers: [AppController, CatsController, ErrController, DogsController, RabbitsController],
  providers: [AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter, // 全局使用过滤器
    // }
  ],
})
export class AppModule { }
