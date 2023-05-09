import { Controller, Req, Res, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, Header, Redirect, Query, ForbiddenException } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CatCreateDTO } from './cats.dto';
import { Request, Response } from "express";

@Controller('cats')
export class CatsController {

    // 查询资源
    @Get()
    @HttpCode(200)
    findall(@Req() request: Request): string {
        return "this is findAll action, this request name is " + request.query.name;
    }

    // 创建资源
    @Post()
    @HttpCode(201)
    create(@Body() body: { name: string }) {
        return "this is create action, name is " + body.name;
    }

    // 路由通配符
    @Get("ab*")
    findSomething() {
        return "this route uses a wildcard";
    }

    // 定义响应头
    @Post('/new')
    @Header('Cache-Control', 'none')
    createNew() {
        return "this actions self defined the response header"
    }

    // 重定向，默认301状态
    @Get('/redirect')
    @Redirect("https://www.baidu.com", 301)
    redirectFunc(@Query() query: { url: string }) {
        if (query?.url?.length > 1) {
            return {
                url: query.url,
                httpCode: 301
            }
        }
    }

    // 修改资源
    @Put(":id")
    update(@Body() body: { name: string }, @Param() param: { id: number }) {
        return "this is put function, name is " + body.name + "， id is " + param.id
    }

    // 异步
    @Get("/async")
    async asyncFunc(): Promise<any[]> {
        return ["dog", "pig", "cat"];
    }

    @Get("observable")
    observableFunc(): Observable<any[]> {
        return of(["dog", "pig"]);
    }

    // 类库的特有处理方式
    @Post("/platformsend")
    async platFormSend(@Body() body: CatCreateDTO, @Res() res: Response) {
        res.status(HttpStatus.CREATED).send('success');
    }

    @Get("platformjson")
    async platformJson(@Res() res: Response) {
        res.status(HttpStatus.OK).json({ msg: "success" })
    }

    @Get('/err')
    async testerr() {
        throw new ForbiddenException();
    }
}
