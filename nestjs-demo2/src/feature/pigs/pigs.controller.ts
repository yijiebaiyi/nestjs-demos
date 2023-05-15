import {Inject, Get, Controller } from '@nestjs/common';
import {LazyModuleLoader} from '@nestjs/core'
import { PigsService } from './pigs.service';


@Controller('pigs')
export class PigsController {

    // @Inject()
    // pigsService:PigsService

    @Get()
    test(){
        
    }
}
