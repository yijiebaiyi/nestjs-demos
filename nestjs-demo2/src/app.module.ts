/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 17:31:57
 * @LastEditTime: 2023-05-12 15:34:48
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './feature/dogs/dogs.controller';
import { CatsModule } from './feature/cats/cats.module';
import { ConfigModule } from './feature/dogs/dym/config.module';
import { DogsService } from './feature/dogs/dogs.service';
import { RabbitsController } from './feature/rabbits/rabbits.controller';
import { RabbitsService } from './feature/rabbits/rabbits.service';
import { CommonService } from './feature/rabbits/common.service';
import { HelloService } from './feature/rabbits/hello.service';
import { PigsController } from './feature/pigs/pigs.controller';
import { PigsService } from './feature/pigs/pigs.service';
import { PigsModule } from './feature/pigs/pigs.module';


@Module({
  imports: [
    CatsModule,
    ConfigModule.register({folder: "./config"}),
    PigsModule
  ],
  controllers: [AppController, DogsController, RabbitsController, PigsController],
  providers: [AppService, DogsService, RabbitsService, CommonService, HelloService, PigsService],
})
export class AppModule { }
