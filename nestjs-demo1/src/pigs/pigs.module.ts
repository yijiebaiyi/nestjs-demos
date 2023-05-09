/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 16:50:30
 * @LastEditTime: 2023-05-09 16:55:12
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { PigsController } from './pigs.controller';
import { PigsService } from './pigs.service';

@Module({
    controllers: [PigsController],
    providers: [PigsService],
    exports: [PigsService],
    imports: []
})
export class PigsModule {
    // 提供者也可以注入到模块类
    constructor(private readonly pigsService: PigsService) {

    }
}
