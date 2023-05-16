import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MessagePattern} from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  
}
