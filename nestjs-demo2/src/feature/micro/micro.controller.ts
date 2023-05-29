import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs'; 

@Controller('micro')
export class MicroController {

    private heroesService;

    constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc){}
    onModuleInit() {
        this.heroesService = this.client.getService('HeroesService');
    }

    @Inject("SUM_SERVICE")
    sumService: ClientProxy; 

    @Get()
    test(@Query('sum') sum:string){
        let sumArr = sum.split(',').map((v) => parseInt(v));
        return this.sumService.send('calnums', sumArr);
    }

    @Get("event")
    testevent(@Query('msg') msg:string){
        return this.sumService.emit('msg', msg);
    }

    @Get("obser")
    testobser(@Query('sum') sum:string){
        let sumArr = sum.split(',').map((v) => parseInt(v));
        return this.sumService.send({ cmd: 'sum' }, sumArr);
    }

    @Get("timeot")
    async testtimeot(@Query('msg') msg:string){
        return this.sumService.send('msg', msg).pipe(timeout(5000));
    }

    @Get("testgrpc")
    async testgrpc(){
        return this.heroesService.findOne({id:1});
        return "hello nestjs";
    }
}
