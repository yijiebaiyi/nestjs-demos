import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class GrpcController {
    @Get()
    test(){
        return 'hello world'
    }
}
