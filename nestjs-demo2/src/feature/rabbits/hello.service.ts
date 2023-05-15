import { Injectable } from '@nestjs/common';

import {ModuleRef, ContextIdFactory} from '@nestjs/core'
import { DogsService } from '../dogs/dogs.service';
import { RabbitsService } from './rabbits.service';
@Injectable()
export class HelloService {
    private dogsService:DogsService;
    
    private rabbitsService:RabbitsService;

    constructor(private moduleRef: ModuleRef){}


    async onModuleInit(){
        // strict 为false表示每次都是同一个实例
        this.rabbitsService = await this.moduleRef.get(RabbitsService,  { strict: false });
        console.log(this.rabbitsService);
    }

    async onScoptModuleInit(){
        // scope provider 必须用 resolve， 并且每次resolve结果都是不同的实例。
        this.dogsService = await this.moduleRef.resolve(DogsService);
        console.log(this.dogsService);

        // 想要是单例，则需要调用ContextIdFactory.create
        const contextId =  ContextIdFactory.create()
        this.dogsService = await this.moduleRef.resolve(DogsService, contextId);
    }
    
    async dynamicMoudleCreate(){
        // 动态provider可以用create创建
        // this.moduleRef.create(xxx)
    }
    
}
