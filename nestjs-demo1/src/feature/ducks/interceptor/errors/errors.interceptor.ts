/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 14:52:08
 * @LastEditTime: 2023-05-11 15:09:46
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(catchError(err => throwError(new BadGatewayException())),
    );
  }
}
