import { SetMetadata } from '@nestjs/common';

export const Test = (...args: string[]) => SetMetadata('test', args);
