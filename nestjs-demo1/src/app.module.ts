import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { PigsModule } from './pigs/pigs.module';

// Global()，使模块成为全局作用域，而不用引入他们
@Global()
@Module({
  imports: [PigsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
