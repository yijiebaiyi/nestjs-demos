import { Injectable,Inject, forwardRef } from '@nestjs/common';
import { RabbitsService } from './rabbits.service';

@Injectable()
export class CommonService {
    constructor(@Inject(forwardRef(()=> RabbitsService)) private rabbitsService:RabbitsService){}
    getWorld(){
        return "world";
    }
}
