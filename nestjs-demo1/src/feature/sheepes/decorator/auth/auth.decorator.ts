/*
 * @Author: tuojinxin
 * @Date: 2023-05-11 16:31:22
 * @LastEditTime: 2023-05-11 16:49:38
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { SetMetadata, UseFilters, UseGuards, applyDecorators } from '@nestjs/common';
import { RolesGuard } from 'src/feature/rabbits/guard/roles/roles.guard';
import { AnyExceptionFilter } from 'src/http-exception/any-exception.filter';

export const Auth = ((data: string) => {
    return applyDecorators(
        UseGuards(RolesGuard),
        SetMetadata("roles", data),
        UseFilters(AnyExceptionFilter)
    );
});
