import { Controller, Get, Inject } from '@nestjs/common';
import { RabbitsService } from './rabbits.service';
import { CommonService } from './common.service';
import { HelloService } from './hello.service';

@Controller('rabbits')
export class RabbitsController {

    @Inject()
    rabbitsService: RabbitsService;

    @Inject()
    commonService: CommonService;

    @Inject()
    helloService: HelloService;

    // 循环依赖
    @Get()
    getHelloWorld(){
        return this.rabbitsService.getHello() + " " + this.commonService.getWorld();
    }


    @Get("/mod")
    moduleRef(){
        this.helloService.onModuleInit()
        this.helloService.onScoptModuleInit()
    }
}
