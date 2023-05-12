/*
 * @Author: tuojinxin
 * @Date: 2023-05-12 13:31:47
 * @LastEditTime: 2023-05-12 14:12:02
 * @LastEditors: tuojinxin
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    findAll() {
        console.log("[service: findAll function]")
    }
}
