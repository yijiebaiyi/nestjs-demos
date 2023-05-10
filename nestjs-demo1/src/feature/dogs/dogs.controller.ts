import { Controller, Get, Param, Res, HttpStatus, ParseIntPipe, Post, Body, UsePipes, Query } from '@nestjs/common';
import { Response } from 'express';
import { ValidationPipe } from './validation/validation.pipe';
import { DogsCreateDTO, DogsValidatorCreateDTO } from './dto/dogs.dto';
import { JoiValidatePipe } from './joi-validate/joi-validate.pipe';
import { DogsCreateSchema } from './dto/dogs.joi.dto';
import { ValidatorValidatePipe } from './validator-validate/validator-validate.pipe';
import { TransIntPipe } from './trans-int/trans-int.pipe';

@Controller('dogs')
export class DogsController {
    // 1. 系统内置pipe的使用
    @Get(":id")
    async getDog(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "系统内置pipe的使用"
        })
    }

    // 2. pipe传参
    @Get("test/:id")
    async getDog1(@Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "pipe传参"
        })
    }

    // 3. 自定义pipe
    @Get("test2/:id")
    async getDog2(@Param("id", ValidationPipe) id: number, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "自定义pipe"
        })
    }

    // 4. 使用joi自定义验证pipe
    @Post("test3")
    @UsePipes(new JoiValidatePipe(DogsCreateSchema))
    async createDog(@Body() body: DogsCreateDTO, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "使用joi自定义验证pipe"
        })
    }

    // 5. 使用validator自定义验证pipe
    @Post("test4")
    async createDog1(@Body(new ValidatorValidatePipe()) body: DogsValidatorCreateDTO, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "使用validator自定义验证pipe"
        })
    }

    // 6. 测试全局管道和模块管道
    @Post("test5")
    async createDog2(@Body() body: DogsValidatorCreateDTO, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            name: "测试全局管道"
        })
    }

    // 7. 测试自定义转化管道
    @Get("test6/:id")
    async getDog11(@Param('id', TransIntPipe) id: any) {
        return "测试自定义转化管道"
    }
}
