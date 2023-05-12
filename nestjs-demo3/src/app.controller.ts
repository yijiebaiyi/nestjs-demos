/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 17:31:57
 * @LastEditTime: 2023-05-12 11:56:44
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createTest() {

  }
}
