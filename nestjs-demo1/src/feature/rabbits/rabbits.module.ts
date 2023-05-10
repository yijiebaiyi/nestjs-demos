/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 20:54:36
 * @LastEditTime: 2023-05-10 20:55:51
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guard/roles/roles.guard';

@Module({
    providers: [
        // 当前模块使用守卫
        // {
        //     provide: APP_GUARD,
        //     useClass: RolesGuard
        // }
    ]
})
export class RabbitsModule {

}
