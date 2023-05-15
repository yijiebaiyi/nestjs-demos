import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { ConfigService } from './dym/config.service';
import { DogsService } from './dogs.service';

@Controller({
    path: "dogs", 
    scope: Scope.REQUEST
})
export class DogsController {

    constructor(private readonly dogsService: DogsService) {}

    @Get()
    test(){
        return this.dogsService.getHostname();
    }

    @Get("/test1")
    test1(){
        return this.dogsService.incCount();
    }
}
