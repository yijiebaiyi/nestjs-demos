/*
 * @Author: tuojinxin
 * @Date: 2023-05-10 15:46:45
 * @LastEditTime: 2023-05-10 16:05:58
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi'
@Injectable()
export class JoiValidatePipe implements PipeTransform {
  constructor(private schema: ObjectSchema) { }
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("this is the JoiValidatePipe")
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(`${error.details.map((d) => d.message).join('\n')} 验证失败`)
    }
    return value;
  }
}
