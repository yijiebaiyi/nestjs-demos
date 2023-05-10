import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("初始value: ", value);
    console.log("初始value类型: ", typeof value);
    if (!value) {
      value = 1;
    }
    if (typeof value == "string") {
      value = parseInt(value);
    }
    console.log("转换后的value: ", value)
    console.log("转换后的value类型: ", typeof value)
    return value;
  }
}
