/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 15:50:14
 * @LastEditTime: 2023-05-09 21:43:34
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

// Global()，使模块成为全局作用域，而不用引入他们
@Global()
@Module({
  imports: [PigsModule],
  controllers: [AppController, CatsController, ErrController],
  providers: [AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter, // 全局使用过滤器
    // }
  ],
})
export class AppModule { }
