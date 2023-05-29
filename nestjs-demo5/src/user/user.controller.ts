import { Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    @Inject()
    userService:UserService

    @Get()
    getall(){
        return this.userService.findAll();
    }

    @Post()
    create(){
        return this.userService.create();
    }
}
