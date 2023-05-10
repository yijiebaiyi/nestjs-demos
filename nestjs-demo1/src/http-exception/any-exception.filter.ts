/*
 * @Author: tuojinxin
 * @Date: 2023-05-09 21:47:54
 * @LastEditTime: 2023-05-10 20:48:45
 * @LastEditors: tuojinxin
 * @Description: 
 */
import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
/*
捕获抛出的每个异常，而不管类型
*/
@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        console.log("[filter: ] this is any exception filters")
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        res.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: req.url,
        })
    }
}