import { Controller, Get, NotFoundException, Res, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptor/logging/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';
import { Response } from 'express';
import { ExcludeNullInterceptor } from './interceptor/exclude-null/exclude-null.interceptor';
import { ErrorsInterceptor } from './interceptor/errors/errors.interceptor';
import { CacheInterceptor } from './interceptor/cache/cache.interceptor';
import { TimeoutInterceptor } from './interceptor/timeout/timeout.interceptor';

@Controller('ducks')
@UseInterceptors(LoggingInterceptor) // 控制器拦截器
export class DucksController {

    @Get("test1")
    // @UseInterceptors(LoggingInterceptor) // 方法拦截器
    getDuck() {
        return "测试拦截器"
    }

    @Get("test2")
    @UseInterceptors(TransformInterceptor)
    getDuck2() {
        return "测试transform interceptor"
    }

    @Get("test3")
    @UseInterceptors(ExcludeNullInterceptor)
    getDuck3() {
        return null;
        // return "测试 ExcludeNullInterceptor"
    }

    @Get("test4")
    @UseInterceptors(ErrorsInterceptor)
    getDuck4() {
        throw new NotFoundException();
        return null;
        // return "测试 ErrorsInterceptor"
    }

    @Get("test5")
    @UseInterceptors(CacheInterceptor)
    getDuck5() {
        return ["origindata1", "origindata2"]
    }

    @Get("test6")
    @UseInterceptors(TimeoutInterceptor)
    async getDuck6() {
        await this.delay(10000);
        return "测试 TimeoutInterceptor"
    }

    async delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }
}
