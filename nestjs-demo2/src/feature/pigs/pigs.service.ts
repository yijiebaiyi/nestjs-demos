import { Injectable } from '@nestjs/common';
import {LazyModuleLoader} from '@nestjs/core';

@Injectable()
export class PigsService {

    constructor(private lazyModuleLoader:LazyModuleLoader){
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
        console.log("这里测试懒加载")
    }

    getNest(){
        return "nestjs";
    }
}
