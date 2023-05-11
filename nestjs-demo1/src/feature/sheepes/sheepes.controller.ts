import { Controller, Get } from '@nestjs/common';
import { User } from './decorator/user/user.decorator';
import { Auth } from './decorator/auth/auth.decorator';

@Controller('sheepes')
export class SheepesController {
    @Get("test1")
    test1(@User() user: any) {
        console.log(user)
        return user;
    }

    @Get("test2")
    test2(@User('roles') roles: any) {
        return roles;
    }

    @Get("test3")
    @Auth('admin')
    test3() {
        return "测试聚合装饰器";
    }
}
