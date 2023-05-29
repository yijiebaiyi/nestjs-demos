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
import { MicroController } from './feature/micro/micro.controller';
import { MicroModule } from './feature/micro/micro.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
// console.log("当前目录：", __dirname);
// console.log("合并后的：", join(__dirname , '../share/hero.proto'))
// 动态模块注册和微服务注册必须在app.module进行
@Module({
  imports: [
    ClientsModule.register(
      [
          {
              name:"SUM_SERVICE",
              transport: Transport.TCP,
              options: {
                  port: 8888
              }
          }, 
          {
            name: 'HERO_PACKAGE',
            transport: Transport.GRPC,
            options: {
              url: "localhost:5000",
              package: 'hero',
              protoPath: join(__dirname, '../share/hero.proto'),
            },
          },
      ]
    ),
    // ClientsModule.register([
    //   {
    //     name: 'HERO_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: {
    //       package: 'hero',
    //       protoPath: join(__dirname, '../share/hero.proto'),
    //     },
    //   },
    // ]),
    CatsModule,
    ConfigModule.register({folder: "./config"}),
    PigsModule,
    MicroModule,
  ],
  controllers: [AppController, DogsController, RabbitsController, PigsController, MicroController],
  providers: [
      // 避免硬编码，需要从另一个服务(比如 ConfigService )获取微服务配置而不是硬编码在客户端程序中
      // {
      //   provide: 'MATH_SERVICE',
      //   useFactory: (configService: ConfigService) => {
      //     const mathSvcOptions = configService.getMathSvcOptions();
      //     return ClientProxyFactory.create(mathSvcOptions);
      //   },
      //   inject: [ConfigService],
      // },
    AppService, DogsService, RabbitsService, CommonService, HelloService, PigsService],
})
export class AppModule { }
