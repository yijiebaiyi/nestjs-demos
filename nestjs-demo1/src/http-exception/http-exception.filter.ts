/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 20:59:19
 * @LastEditTime: 2023-05-09 21:24:38
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest() as Request;
    const res = ctx.getResponse() as Response;
    const status = exception.getStatus();
    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url
    })
  }
}
