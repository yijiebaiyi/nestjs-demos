import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {EventPattern, MessagePattern} from '@nestjs/microservices';
import { Observable, from } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('calnums')
  async calSum(nums: number[]) {
    return (nums || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sum' })
  asccumulate(data: number[]): Observable<number> {
      return from(data);
  }

  // 测试事件模式，只消费，不返回
  @EventPattern("msg")
  consolelog(msg: string){
    console.log("打印消息", msg)
  }

  @MessagePattern("msg")
  async testtimeout(reqMsg: string){
    console.log("start....")
    await this.delay(5000);
    console.log("end....")
    return "hello, " + reqMsg;
  }

  async delay(ms:number) {
    console.log("delay....")
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }
}


