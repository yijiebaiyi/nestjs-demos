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
import { DogsModule } from './feature/dogs/dogs.module';
import { CatsModule } from './feature/cats/cats.module';


@Module({
  imports: [DogsModule, CatsModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule { }
