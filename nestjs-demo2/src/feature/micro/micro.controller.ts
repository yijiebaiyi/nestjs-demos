import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs'; 

@Controller('micro')
export class MicroController {

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
}
