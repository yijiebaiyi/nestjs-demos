/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 14:40:29
 * @LastEditTime: 2023-05-10 14:55:41
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { ArgumentMetadata, BadRequestException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("this is validation Pipe")
    console.log("数据值: ", value)
    console.log("元数据metadata: ", metadata)
    console.log(metadata.metatype)
    if (typeof value !== "number") {
      throw new BadRequestException({ msg: "参数应该是数字" }, {
        description: "字符串当数字传入",
      });
    }
    return value;
  }
}
