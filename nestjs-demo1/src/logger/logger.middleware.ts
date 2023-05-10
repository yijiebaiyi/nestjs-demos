/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 17:50:38
 * @LastEditTime: 2023-05-10 20:47:39
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("[middleware: ] this is logger middleware")
    next();
  }
}

// 或者函数式中间件
// export function logger(req, res, next) {
//   console.log("function middleware ...")
//   next();
// }