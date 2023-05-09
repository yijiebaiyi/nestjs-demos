/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 15:50:14
 * @LastEditTime: 2023-05-09 22:07:21
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { AllExceptionFilter } from './http-exception/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  // 全局中间件
  //app.use(logger);


  /**
   * 
   * 全局过滤器可以扩展基本过滤器。这可以通过两种方式来实现。
   * 您可以通过注入 HttpServer 来使用继承自基础类的全局过滤器。
   * 上边的话不懂。。。
   */
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
