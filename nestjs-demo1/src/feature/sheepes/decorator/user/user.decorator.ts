import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
        request.user = { "roles": ['admin', 'user'], "name": "zhangdada" }
    }
    return data ? request.user[data] : request.user;
});
