import { NestFactory,LazyModuleLoader } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 不懂。。。懒加载怎么实现的？
  const lazyModuleLoader = app.get(LazyModuleLoader);
  await app.listen(3000);
}
bootstrap();
