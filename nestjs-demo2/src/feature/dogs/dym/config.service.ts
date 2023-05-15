import { Injectable, Inject } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from "fs"

@Injectable()
export class ConfigService {
    private readonly envConfig;
    constructor(@Inject("CONFIG_OPTIONS") options){
        const filepath = `${process.env.NODE_ENV || 'development'}.env`;
        const envfile  = path.resolve(__dirname, '../../../../../', options.folder, filepath);
        this.envConfig = dotenv.parse(fs.readFileSync(envfile));
    }

    get(key:string){
        return this.envConfig[key]; 
    }
}
