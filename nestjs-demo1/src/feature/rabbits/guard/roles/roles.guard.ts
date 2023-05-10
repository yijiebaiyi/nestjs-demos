import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { };
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("[guard: ] this is roles guard.")
    // 获取http中request对象的数据
    const req: Request = context.switchToHttp().getRequest();
    // 获取上下文引用的元数据，键为roles，我们示例代码的值是：['admin']
    const roles: string[] = this.reflector.get('roles', context.getHandler());
    // console.log("当前请求参数：", req.query)
    if (!roles || roles.length < 0) {
      return true;
    }
    let reqrole: string = req.query?.role as string;
    if (!roles.includes(reqrole)) {
      throw new ForbiddenException("你没有权限访问，你的角色是：" + reqrole, "无权访问")
      return false;
    }
    return true;
  }
}
