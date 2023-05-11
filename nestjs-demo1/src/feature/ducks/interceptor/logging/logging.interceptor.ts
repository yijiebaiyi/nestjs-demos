/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 14:12:03
 * @LastEditTime: 2023-05-11 14:17:03
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("[interceptor: ] this is loggingInterceptor")
    let start = Date.now();
    // tap(() => console.log(`After... ${Date.now() - now}ms`)),

    return next.handle().pipe(tap(() => console.log(`during ${Date.now() - start}ms`)));
  }
}
