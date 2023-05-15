import { Inject, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from './dym/config.service';

//provider注入作用域， （这东西最好用默认的单例）
// 获取原始REQUEST, 可以通过注入REQUEST对象实现

@Injectable({scope: Scope.REQUEST})
export class DogsService {
    private hostname:string;
    private count: number = 0;
    constructor(private configService: ConfigService) {
        this.hostname = configService.get("HOSTNAME");
    }

    getHostname(){
        return this.hostname;
    }

    incCount(){
        this.count++;
        return this.count;
    }
}
