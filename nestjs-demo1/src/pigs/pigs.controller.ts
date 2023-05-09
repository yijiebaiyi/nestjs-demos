/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 15:52:05
 * @LastEditTime: 2023-05-09 16:21:39
 * @LastEditors: tuojinxin
 * @Description:
 */
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { Pigs } from './pigs.interface';

@Controller('pigs')
export class PigsController {

    // 以下两种方法都可以将服务初始化
    // 方法1 构造函数注入
    // constructor(private pigsService: PigsService) { }

    // 方法2 基于属性注入
    @Inject()
    private pigsService: PigsService;

    @Get()
    async findAll() {
        return this.pigsService.findAll();
    }

    @Post()
    async create(@Body() body: Pigs) {
        await this.pigsService.createPig(body)
        return "success";
    }
}
