/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 15:22:54
 * @LastEditTime: 2023-05-10 18:19:48
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { ValidatorValidatePipe } from './validator-validate/validator-validate.pipe';

@Module({
    providers: [
        // 为单个module设置管道
        // {
        //     provide: APP_PIPE,
        //     useClass: ValidatorValidatePipe
        // }
    ]
})
export class DogsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("dogs")
    }
}
