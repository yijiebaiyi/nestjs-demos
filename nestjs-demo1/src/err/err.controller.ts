import { BadRequestException, Controller, Get, HttpException, HttpStatus, NotFoundException, NotImplementedException, UseFilters } from '@nestjs/common';
import { ForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
import { AnyExceptionFilter } from 'src/http-exception/any-exception.filter';
import { AllExceptionFilter } from 'src/http-exception/all-exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller('err')
export class ErrController {
    @Get('test1')
    async test1() {
        throw new HttpException("Forbbiden", HttpStatus.FORBIDDEN)
    }

    @Get('test2')
    async test2() {
        throw new HttpException({ "msg": "发生错误了" }, HttpStatus.FORBIDDEN)
    }

    @Get('test3')
    async test3() {
        throw new ForbiddenException();
    }

    @UseFilters(HttpExceptionFilter)
    @Get('test4')
    async test4() {
        throw new NotFoundException();
    }

    @UseFilters(AnyExceptionFilter)
    @Get("test5")
    async test5() {
        throw new NotImplementedException();
    }

    // @UseFilters(new AllExceptionFilter()) error
    // 注意：继承自BaseExceptionFilter的过滤器，不能手动创建实例
    @UseFilters(AllExceptionFilter)
    @Get("test6")
    async test6() {
        throw new NotFoundException();
    }
}
