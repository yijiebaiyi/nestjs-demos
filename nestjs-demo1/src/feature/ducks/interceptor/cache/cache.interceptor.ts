/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 15:10:59
 * @LastEditTime: 2023-05-11 15:17:43
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let isCache = Math.random() * 10 > 5;
    let cacheData = ["cachedata1", "cachedata2"]
    if (isCache) {
      console.log("is cached")
      return of(cacheData)
    }

    return next.handle();
  }
}
