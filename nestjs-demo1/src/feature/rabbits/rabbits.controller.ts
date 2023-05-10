import { Controller, Get, SetMetadata, UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import { RolesGuard } from './guard/roles/roles.guard';
import { AnyExceptionFilter } from 'src/http-exception/any-exception.filter';
import { TransIntPipe } from '../dogs/trans-int/trans-int.pipe';

@Controller('rabbits')
export class RabbitsController {
    @Get('test1')
    @SetMetadata('roles', ['admin'])
    @UseGuards(RolesGuard)
    test1() {
        return "这里测试守卫: roles 为 admin可以访问"
    }
}
