/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 17:50:38
 * @LastEditTime: 2023-05-09 18:10:33
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("hello world")
    next();
  }
}

// 或者函数式中间件
// export function logger(req, res, next) {
//   console.log("function middleware ...")
//   next();
// }