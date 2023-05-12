/*
 * @Author: tuojinxin
 * @Date: 2023-05-12 13:28:26
 * @LastEditTime: 2023-05-12 17:57:11
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from './services/cats.service';
import { hello } from './services/hello';
import { MycatsService } from './services/mycats';

@Controller('cats')
export class CatsController {
    constructor(@Inject("HELLO") private myhello) { }

    @Inject()
    catsService: CatsService;

    @Inject()
    myCatsService: MycatsService;

    @Inject("AliasCatsService")
    catsAliasService;

    @Inject("ANIMAL_FACTORY")
    animalFacotory;

    @Inject("CONFIG")
    config;

    @Inject("ASYNC_PROVIDER")
    asyncProvider;
    // @Inject("CONNECT")
    // private con: Connect

    @Get('test1')
    test1() {
        this.catsService.findAll();
        return "test value providers"
    }

    @Get('test2')
    async test2() {
        console.log(hello.sayHello())
        return "test non-class providers"
    }

    @Get('test3')
    test3() {
        let res = this.myCatsService.findAll();
        return "test class providers: res is " + res;
    }

    @Get('test4')
    test4() {
        this.catsAliasService.findAll();
        return "test alias providers"
    }

    @Get('test5')
    test5() {
        let res = this.animalFacotory.say();
        console.log(res);
        return "test factory providers"
    }

    @Get('test6')
    test6() {
        console.log(this.config);
        return "test non-services providers"
    }

    @Get("test7")
    test7() {
        console.log("starting...")
        console.log(this.asyncProvider);
        console.log("ending..")
        return "test async provider"
    }
}
