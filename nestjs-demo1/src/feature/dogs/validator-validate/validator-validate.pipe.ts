import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidatorValidatePipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log("this is validatorValidate pipe")
    if (!value || this.isOriginalType(metatype)) {
      return value;
    }
    let obj = plainToInstance(metatype, value);
    let errors = await validate(obj);
    if (errors.length > 0) {
      const errorstring = errors.map((err) => { return Object.entries(err.constraints).map((v) => v[1]).join("\n") }).join("\n");
      throw new BadRequestException(errorstring)
    }

    return value;
  }

  isOriginalType(metatype) {
    let types: Function[] = [Number, String, Array, Object, Boolean]
    return types.includes(metatype)
  }
}
