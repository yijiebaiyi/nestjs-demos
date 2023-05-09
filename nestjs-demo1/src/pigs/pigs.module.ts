/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 16:50:30
 * @LastEditTime: 2023-05-09 21:46:00
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { PigsController } from './pigs.controller';
import { PigsService } from './pigs.service';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { CatsController } from 'src/cats/cats.controller';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
    controllers: [PigsController],
    providers: [PigsService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter, // 当前pigs模块使用过滤器
        }
    ],
    exports: [PigsService],
    imports: []
})
export class PigsModule implements NestModule {
    // 1. 应用中间件
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes("pigs")
    // }

    // 2. 细化请求方法（也可以通配符匹配）
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes({ path: "pigs", method: RequestMethod.GET })
    // }
    // 3. 按照控制器
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes(PigsController, CatsController)
    // }
    // 4. 使用exclude排除某些路由
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).exclude({ path: "pigs", method: RequestMethod.POST }, 'pigs/(.*)').forRoutes(PigsController)
    }
    // 提供者也可以注入到模块类
    constructor(private readonly pigsService: PigsService) {

    }
}
