/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 14:17:56
 * @LastEditTime: 2023-05-11 14:22:50
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging/logging.interceptor';

@Module({
    providers: [
        // 模块拦截器
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: LoggingInterceptor
        // }
    ]
})
export class DucksModule { }
