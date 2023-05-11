import { Controller, Get, SetMetadata, UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import { RolesGuard } from './guard/roles/roles.guard';
import { AnyExceptionFilter } from 'src/http-exception/any-exception.filter';
import { TransIntPipe } from '../dogs/trans-int/trans-int.pipe';
import { Roles } from './decorator/roles.decorator';

@Controller('rabbits')
export class RabbitsController {
    @Get('test1')
    @SetMetadata('roles', ['admin'])
    @UseGuards(RolesGuard)
    test1() {
        return "这里测试守卫: roles 为 admin可以访问"
    }

    @Get('test2')
    @UseGuards(RolesGuard)
    @Roles('admin', 'user')
    test2() {
        return "这里测试自定义装饰器引用元数据。"
    }
}
