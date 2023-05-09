/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 15:52:05
 * @LastEditTime: 2023-05-09 21:42:19
 * @LastEditors: tuojinxin
 * @Description:
 */
import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { Pigs } from './pigs.interface';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';

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
        console.log("this is findall function")
        return this.pigsService.findAll();
    }

    @Post()
    async create(@Body() body: Pigs) {
        await this.pigsService.createPig(body)
        return "success";
    }

    @Get("/err")
    async err() {
        throw new ForbiddenException();
    }
}
