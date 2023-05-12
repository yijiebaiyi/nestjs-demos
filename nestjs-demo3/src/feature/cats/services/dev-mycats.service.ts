/*
 * @Author: tuojinxin
 * @Date: 2023-05-12 15:35:26
 * @LastEditTime: 2023-05-12 15:53:47
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Injectable } from '@nestjs/common';
import { MycatsService } from './mycats';

@Injectable()
export class DevMycatsService extends MycatsService {
    findAll() {
        return "dev cat";
    }
}
