/*
 * @Author: tuojinxin
 * @Date: 2023-05-12 15:35:40
 * @LastEditTime: 2023-05-12 15:53:33
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Injectable } from '@nestjs/common';
import { MycatsService } from './mycats';

@Injectable()
export class ProdMycatsService extends MycatsService {
    findAll() {
        return "prod cat";
    }
}
