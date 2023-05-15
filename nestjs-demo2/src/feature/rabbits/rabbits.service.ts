import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CommonService } from './common.service';

@Injectable()
export class RabbitsService {
    constructor(@Inject(forwardRef(()=> CommonService)) private commonService:CommonService){}
    getHello(){
        return "hello";
    }
}
